export interface Language {
	apiPrefix: string;
	linkPrefix: string;
	name: string;
}

export const LanguageList: Language[] = [
	{ apiPrefix: 'cn', linkPrefix: '/cn', name: '中文' },
	{ apiPrefix: 'jp', linkPrefix: '/jp', name: '日本語' },
	{ apiPrefix: 'en', linkPrefix: '/', name: 'English' }
];
