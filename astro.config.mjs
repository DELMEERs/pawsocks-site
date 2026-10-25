// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'pawsocks',
			description: 'уютный ванильный smp-сервер майнкрафт для своих',
			logo: {
				src: './src/assets/paw.svg',
				alt: 'лапка pawsocks',
			},
			favicon: '/favicon.svg',
			defaultLocale: 'root',
			locales: {
				root: { label: 'русский', lang: 'ru' },
			},
			customCss: ['@fontsource-variable/nunito', './src/styles/custom.css'],
			sidebar: [
				{ label: 'главная', link: '/' },
				{ label: 'правила', link: '/rules/' },
			],
			pagination: false,
			lastUpdated: false,
		}),
	],
});
