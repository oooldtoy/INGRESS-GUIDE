import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	// 替换为你的 GitHub Pages 地址
	// 格式：https://<你的用户名>.github.io/<项目仓库名>/
	site: 'https://MarsianCreator.github.io/INGRESS-GUIDE/', 
	base: '/INGRESS-GUIDE', // 必须和仓库名一致，且以斜杠开头
	integrations: [
		starlight({
			title: 'INGRESS指南',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/MarsianCreator/INGRESS-GUIDE' },
			],
			sidebar: [
				{ label: '开始使用', link: '/introduction/' },
				{ label: '进阶教程', autogenerate: { directory: 'guides' } },
			],
		}),
	],
});