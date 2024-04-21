package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"gopkg.in/yaml.v3"
)

const (
	songsPath   = "data/songs/"
	indexedFile = "indexed.yaml"
)

type Chinese struct {
}

type Song struct {
	Title  string `yaml:"title" json:"title"`
	Artist string `yaml:"artist" json:"artist"`
}

type SongResponse struct {
	Songs []Song `json:"songs,omitempty"`
	Error error  `json:"error,omitempty"`
}

// writeJSON will attempt to convert 'data' into JSON and write it to http.ResponseWriter.
//
// If unsuccessful, it will instead write a 500 Internal Server Error.
func writeJSON(w http.ResponseWriter, statusCode int, data any) {
	out, err := json.Marshal(data)
	if err != nil {
		w.WriteHeader(500)
		w.Write([]byte("Internal Server Error"))
	} else {
		w.WriteHeader(statusCode)
		w.Write(out)
	}
}

func allSongs(w http.ResponseWriter, r *http.Request) {
	res := SongResponse{}
	filePath := songsPath + indexedFile
	data, err := os.ReadFile(filePath)
	if err != nil {
		res.Error = err
		writeJSON(w, 500, res)
		return
	}

	err = yaml.Unmarshal(data, &res.Songs)
	if err != nil {
		res.Error = err
		writeJSON(w, 500, res)
		return
	}

	writeJSON(w, 200, res)
	return
}

func songHandler(w http.ResponseWriter, r *http.Request) {
	parts := strings.Split(r.URL.Path, "/")
	if len(parts) == 2 {
		allSongs(w, r)
	} else if len(parts) == 4 {
	} else {
		w.WriteHeader(404)
	}
}

// index walks through the data/songs directory and saves an appendix in another file.
func index() {
	out := []Song{}
	err := filepath.Walk(songsPath, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		parts := strings.Split(path, "/")
		if len(parts) == 4 && strings.HasSuffix(path, ".yaml") {
			artist := parts[2]
			title := strings.TrimSuffix(parts[3], ".yaml")
			out = append(out, Song{Artist: artist, Title: title})
		}
		return nil
	})
	if err != nil {
		log.Fatal(err)
	}

	// Marshal the struct into YAML
	data, err := yaml.Marshal(out)
	if err != nil {
		log.Fatal(err)
	}

	filePath := songsPath + indexedFile
	file, err := os.OpenFile(filePath, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, 0644)
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	_, err = file.Write(data)
	if err != nil {
		log.Fatal(err)
	}

	err = file.Sync()
	if err != nil {
		log.Fatal(err)
	}
}

func middleware(handler func(http.ResponseWriter, *http.Request)) func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		// Enable CORS
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "*")
		w.Header().Set("Access-Control-Allow-Headers", "*")

		handler(w, r)
		log.Printf("%s %s\n", r.Method, r.URL.Path)
	}
}

func main() {
	shouldIndex := false
	if shouldIndex {
		index()
	}

	mux := http.NewServeMux()
	mux.HandleFunc("/songs/", middleware(songHandler))
	mux.HandleFunc("/songs", middleware(songHandler))

	addr := ":8080"
	fmt.Println(fmt.Sprintf("Starting server on %s...", addr))
	if err := http.ListenAndServe(addr, mux); err != nil {
		fmt.Printf("Error starting server: %v\n", err)
	}
}
