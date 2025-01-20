
<!-- Animating Numbers -->
<script>
  import { onMount } from 'svelte';
  let showNumber = false;

  onMount(() => {
    setTimeout(() => {
      showNumber = true;
    }, 1000); // Animation delay for numbers to show
  });
</script>

<section class="py-16 bg-gray-100">
  <!-- Title and Subtitle -->
  <div class="text-center mb-12">
    <h2 class="text-5xl font-bold text-gray-900">What We Do</h2>
    <p class="mt-4 text-2xl text-gray-700">Catalyzing Digital Transformation</p>
  </div>

  <!-- First Feature: 3D Transformation -->
  <div class="max-w-5xl mx-auto px-6">
    <h3 class="text-3xl font-semibold mb-8">The 3D Transformation: A New Era of Opportunity</h3>
    <p class="text-lg mb-4">
      Asia's digital economy stands at a pivotal moment, shaped by three powerful forces of change:
    </p>

    <!-- Digitalization -->
    <div class="mb-12">
      <h4 class="text-2xl font-semibold text-blue-600">Digitalization: The Next Frontier</h4>
      <p class="text-gray-700">
        As Southeast Asia's digital economy accelerates toward <span class="font-bold text-blue-600">$1 trillion</span> by 2030, we see unprecedented opportunity. AI 2.0 technologies promise to boost regional GDP by <span class="font-bold text-blue-600">10-18%</span>, fundamentally reimagining how businesses operate and create value.
      </p>
      <div class="mt-4 h-2 bg-blue-600 w-3/4"></div>
    </div>

    <!-- Deglobalization -->
    <div class="mb-12">
      <h4 class="text-2xl font-semibold text-green-600">Deglobalization: The Strategic Advantage</h4>
      <p class="text-gray-700">
        In an era of shifting global dynamics, Singapore emerges as a crucial neutral hub, bridging East and West. This unique position creates unparalleled opportunities for companies seeking trusted partners for international expansion.
      </p>
    </div>

    <!-- Decarbonization -->
    <div class="mb-12">
      <h4 class="text-2xl font-semibold text-green-600">Decarbonization: The Sustainable Imperative</h4>
      <p class="text-gray-700">
        With <span class="font-bold text-green-600">$1.5 trillion</span> in green investments needed by 2030, we see technology as the key to sustainable growth. Our focus on innovative solutions helps companies thrive while addressing urgent environmental challenges.
      </p>
      <div class="mt-4 h-2 bg-green-600 w-2/3"></div>
    </div>
  </div>
</section>

<section class="py-16 bg-gray-100">
  <!-- Title and Subtitle -->
  <div class="text-center mb-12">
    <h2 class="text-5xl font-bold text-gray-900">Investment Strategy: The ABCDE Framework</h2>
    <p class="mt-4 text-2xl text-gray-700">Our investment thesis targets five interconnected pillars driving tomorrow's digital economy.</p>
  </div>

  <!-- Investment Pillars: Grid Display -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mx-6">
    <!-- AI 2.0 Native Companies & Solutions -->
    <div class="p-8 bg-white shadow-md rounded-lg hover:shadow-xl transition-all duration-300">
      <h3 class="text-2xl font-semibold text-blue-600">AI 2.0 Native Companies & Solutions</h3>
      <p class="text-gray-700 mt-4">
        Revolutionary artificial intelligence platforms reshaping industry paradigms.
      </p>
    </div>

    <!-- Business Intelligence & Data Platforms -->
    <div class="p-8 bg-white shadow-md rounded-lg hover:shadow-xl transition-all duration-300">
      <h3 class="text-2xl font-semibold text-green-600">Business Intelligence & Data Platforms</h3>
      <p class="text-gray-700 mt-4">
        Advanced analytics and insights driving next-generation decision making.
      </p>
    </div>

    <!-- Cloud Services & Enterprise Tools -->
    <div class="p-8 bg-white shadow-md rounded-lg hover:shadow-xl transition-all duration-300">
      <h3 class="text-2xl font-semibold text-purple-600">Cloud Services & Enterprise Tools</h3>
      <p class="text-gray-700 mt-4">
        Scalable infrastructure enabling digital transformation at global scale.
      </p>
    </div>

    <!-- Digital Infrastructure & Networks -->
    <div class="p-8 bg-white shadow-md rounded-lg hover:shadow-xl transition-all duration-300">
      <h3 class="text-2xl font-semibold text-red-600">Digital Infrastructure & Networks</h3>
      <p class="text-gray-700 mt-4">
        Future-proof foundations powering tomorrow's connected economy.
      </p>
    </div>

    <!-- Energy Innovation & E-Mobility -->
    <div class="p-8 bg-white shadow-md rounded-lg hover:shadow-xl transition-all duration-300">
      <h3 class="text-2xl font-semibold text-yellow-600">Energy Innovation & E-Mobility</h3>
      <p class="text-gray-700 mt-4">
        Breakthrough solutions for a sustainable, electrified future.
      </p>
    </div>
  </div>
</section>
<section class="py-16 bg-gray-100">
  <!-- Title and Subtitle -->
  <div class="text-center mb-12">
    <h2 class="text-5xl font-bold text-gray-900">Impact of Our Strategies</h2>
    <p class="mt-4 text-2xl text-gray-700">Visualizing the impact of our strategies on the digital economy and GDP growth.</p>
  </div>

  <!-- Line Chart -->
  <div class="relative w-full max-w-4xl mx-auto">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" class="w-full h-72">
      <!-- X Axis and Y Axis -->
      <line x1="40" y1="270" x2="480" y2="270" stroke="black" stroke-width="2"/>
      <line x1="40" y1="20" x2="40" y2="270" stroke="black" stroke-width="2"/>

      <!-- X Axis Labels -->
      <text x="80" y="290" class="text-sm text-gray-600">Digitalization Value</text>
      <text x="280" y="290" class="text-sm text-gray-600">GDP Growth</text>

      <!-- Y Axis Labels -->
      <text x="10" y="20" class="text-sm text-gray-600">1T</text>
      <text x="10" y="130" class="text-sm text-gray-600">50%</text>
      <text x="10" y="250" class="text-sm text-gray-600">0%</text>

      <!-- Bars for Digitalization and GDP Growth -->
      <rect x="60" y="90" width="80" height="180" fill="#4CAF50"/>
      <rect x="260" y="110" width="80" height="160" fill="#2196F3"/>

      <!-- Data Labels -->
      <text x="100" y="80" class="text-sm font-semibold text-gray-900">$1T</text>
      <text x="300" y="100" class="text-sm font-semibold text-gray-900">10-18%</text>

    </svg>
  </div>
</section>



<style>
  .transition-opacity {
    opacity: 0;
    transition: opacity 2s ease;
  }
</style>
