<script>
  import Menu from '../components/+menu.svelte';
  import Hero from '../components/+hero.svelte';
  import Leadership from '../components/+leadership.svelte';
  import Vision from '../components/+vision.svelte';
  import WhatWeDo from '../components/+whatWeDo.svelte';
  import Impact from '../components/+impact.svelte';
  import News from '../components/+news.svelte';
  import Footer from '../components/+footer.svelte';
  import FullScreenSection from '../components/+fullScreenSection.svelte';
</script>

<Menu />

<section id="who-we-are">
  <FullScreenSection backgroundColor="bg-white">
    <Hero />
  </FullScreenSection>
</section>

<section id="vision"> 
  <FullScreenSection backgroundColor="bg-gray-100">
    <Vision />
  </FullScreenSection>
</section>

<section id="leadership">
  <FullScreenSection backgroundColor="bg-white">
    <Leadership />
  </FullScreenSection>
</section>

<section id="what-we-do">
  <WhatWeDo />
</section>

<section id="our-impact" class="min-h-screen">
  <Impact />
</section>

<section id="what-we-do">
  <News />
</section>

<Footer />