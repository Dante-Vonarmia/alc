<script>
  import { i18n } from '$lib/i18n';
  import { ParaglideJS } from '@inlang/paraglide-sveltekit';
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <!-- 动态设置页面语言和方向 -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=0.8, maximum-scale=1, user-scalable=no">
  <meta name="description" content="Your website description" />
  <meta name="author" content="Your name or company" />
  <title>ALC Capital</title>
  
  <!-- 设置 lang 和 dir -->
  <html lang={i18n.language} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} />
</svelte:head>

<ParaglideJS {i18n}>
  {@render children()}
</ParaglideJS>
