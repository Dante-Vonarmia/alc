import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],  // 这里设置 Tailwind 的默认字体
    	  robotoCondensed: ['Roboto Condensed', 'sans-serif'],  // 为 Roboto Condensed 创建字体系列
			},
		}
	},

	plugins: [typography, containerQueries]
};
