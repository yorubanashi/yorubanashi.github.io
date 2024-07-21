<script lang="ts">
  import type { Link } from "$lib/components/Navigation.svelte";
  import Navigation from "$lib/components/Navigation.svelte";

  const LINKS: Link[] = [
    { link: "/chinese/songs", label: "歌曲" },
  ];
</script>

<Navigation links={LINKS} title={"中文"} />
