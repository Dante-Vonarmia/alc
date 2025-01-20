import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	],
	server: {
		host: '0.0.0.0',  // 允许外部设备访问
		port: 3000,        // 您可以根据需要选择其他端口
		open: true          // 可选，自动打开浏览器
	}
});
