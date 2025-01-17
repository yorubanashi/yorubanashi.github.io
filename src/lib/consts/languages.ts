export interface Language {
	apiPrefix: string;
	linkPrefix: string;
	name: string;
}

const chinese = { apiPrefix: 'cn', linkPrefix: '/cn', name: '中文' };
const english = { apiPrefix: 'en', linkPrefix: '/en', name: 'English' };
const japanese = { apiPrefix: 'jp', linkPrefix: '/jp', name: '日本語' };

export const LanguageList: Language[] = [chinese, japanese, english];

// I'm not sure where the right place for this function should be...
export const parseLanguageFromPathname = (pathname: string): Language => {
	for (let i = 0; i < LanguageList.length; i++) {
		let lang = LanguageList[i];
		if (pathname.startsWith(lang.linkPrefix)) {
			return lang;
		}
	}

	return english;
};
