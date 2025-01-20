<script>
  import { onMount } from 'svelte';
  import Splide from '@splidejs/splide';
  import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'; // 引入样式

  let splide;

  onMount(() => {
    splide = new Splide('.splide', {
      type   : 'fade',         // 使滑动效果为淡入淡出
      height : '100%',         // 滑动区域高度
      perPage: 1,              // 每次展示一个幻灯片
      pagination: false,       // 禁止分页器
      arrows: {
        prev: '<button class="splide__arrow splide__arrow--prev">Previous</button>',
        next: '<button class="splide__arrow splide__arrow--next">Next</button>',
      },
      autoplay: false,          // 自动播放
      interval: 3000,          // 每3秒切换
    });

    splide.mount();
  });
</script>

<div class="text-center p-8 bg-white">
  <!-- Leadership Team Title -->
  <h3 class="text-2xl font-semibold mb-4">Leadership Team</h3>
  <p class="text-left">Our leadership brings together decades of experience in identifying, nurturing, and scaling breakthrough technologies across markets.</p>


  <!-- Avatar Slider: This will be at the bottom -->
  <div class="splide mt-6">
    <div class="splide__track">
      <ul class="splide__list">
        <!-- Leadership Avatar Slider -->
        <li class="splide__slide relative">
          <div class="flex justify-center items-center">
            <!-- First Team Member Avatar -->
            <div class="flex flex-col items-center">
              <img src="https://i.pravatar.cc/150?img=1" alt="Justin Chen" class="w-16 h-16 rounded-full mb-4" />
              <div class="text-center">
                <p class="font-bold">Justin Chen</p>
                <p class="text-sm">Founder & Managing Partner</p>
              </div>
            </div>
          </div>
        </li>

        <li class="splide__slide relative">
          <div class="flex justify-center items-center">
            <!-- Second Team Member Avatar -->
            <div class="flex flex-col items-center">
              <img src="https://i.pravatar.cc/150?img=2" alt="Elline Zheng" class="w-16 h-16 rounded-full mb-4" />
              <div class="text-center">
                <p class="font-bold">Elline Zheng</p>
                <p class="text-sm">Partner</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

<!-- Static Content: Other Sections (e.g., Investment Team, Advisory Network, Global Network) -->
<!-- <div class="text-center p-8 bg-white">
  <h3 class="text-2xl font-semibold mb-4">Investment Team</h3>
  <p class="text-left">Our investment professionals unite technological insight with executional excellence. With a strategic presence in Singapore and Japan, we maintain deep connections across Asia's most dynamic innovation hubs while building bridges to global markets.</p>
</div> -->

<!-- <div class="text-center p-8 bg-white">
  <h3 class="text-2xl font-semibold mb-4">Advisory Network</h3>
  <ul class="list-disc pl-6 text-left space-y-2">
    <li><i class="fas fa-user-circle mr-2"></i>Founders who have built Southeast Asia's defining technology companies</li>
    <li><i class="fas fa-cogs mr-2"></i>Investment pioneers who have shaped the global venture capital and private equity landscape</li>
    <li><i class="fas fa-lightbulb mr-2"></i>Industry luminaries across our core sectors who provide unique insights and opportunities</li>
  </ul>
</div>

<div class="text-center p-8 bg-white">
  <h3 class="text-2xl font-semibold mb-4">Global Network</h3>
  <ul class="list-disc pl-6 text-left space-y-2">
    <li><i class="fas fa-rocket mr-2"></i>Entrepreneurs at the cutting edge of technological innovation</li>
    <li><i class="fas fa-globe mr-2"></i>Sophisticated global investors with strategic perspectives</li>
    <li><i class="fas fa-users mr-2"></i>Influential policymakers and industry shapers who drive market evolution</li>
  </ul>
</div> -->

<style>
</style>
