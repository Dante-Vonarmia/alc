<!-- src/components/LeadershipSlider.svelte -->
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

<div class="splide">
  <div class="splide__track">
    <ul class="splide__list">
      <!-- Leadership Team -->
      <li class="splide__slide relative">
        <div class="text-center p-8 bg-white">
          <h3 class="text-2xl font-semibold mb-4">Leadership Team</h3>
          <p class="text-left">Our leadership brings together decades of experience in identifying, nurturing, and scaling breakthrough technologies across markets.</p>
          
          <!-- Team members with avatars -->
          <section class="flex justify-center items-center w-full h-full mt-6">
            <!-- First Team Member -->
            <div class="flex flex-col items-center mr-8">
              <img src="https://i.pravatar.cc/150?img=1" alt="Justin Chen" class="w-16 h-16 rounded-full mb-4" />
              <div class="text-center">
                <p class="font-bold">Justin Chen</p>
                <p class="text-sm">Founder & Managing Partner</p>
              </div>
            </div>

            <!-- Second Team Member -->
            <div class="flex flex-col items-center">
              <img src="https://i.pravatar.cc/150?img=2" alt="Elline Zheng" class="w-16 h-16 rounded-full mb-4" />
              <div class="text-center">
                <p class="font-bold">Elline Zheng</p>
                <p class="text-sm">Partner</p>
              </div>
            </div>
          </section>
        </div>
        <!-- Right-bottom corner icon -->
        <div class="absolute bottom-4 right-4 text-5xl text-gray-300 opacity-30">
          <i class="fas fa-users"></i>
        </div>
      </li>

      <!-- Investment Team -->
      <li class="splide__slide">
        <div class="text-center p-8 bg-white">
          <h3 class="text-2xl font-semibold mb-4">Investment Team</h3>
          <p class="text-left">Our investment professionals unite technological insight with executional excellence. With strategic presence in Singapore and Japan, we maintain deep connections across Asia's most dynamic innovation hubs while building bridges to global markets.</p>
        </div>
      </li>

      <!-- Advisory Network -->
      <li class="splide__slide">
        <div class="text-center p-8 bg-white">
          <h3 class="text-2xl font-semibold mb-4">Advisory Network</h3>
          <ul class="list-disc pl-6 text-left">
            <li><i class="fas fa-user-circle mr-2"></i>Founders who have built Southeast Asia's defining technology companies</li>
            <li><i class="fas fa-cogs mr-2"></i>Investment pioneers who have shaped the global venture capital and private equity landscape</li>
            <li><i class="fas fa-lightbulb mr-2"></i>Industry luminaries across our core sectors who provide unique insights and opportunities</li>
          </ul>
        </div>
      </li>

      <!-- Global Network -->
      <li class="splide__slide">
        <div class="text-center p-8 bg-white">
          <h3 class="text-2xl font-semibold mb-4">Global Network</h3>
          <ul class="list-disc pl-6 text-left">
            <li><i class="fas fa-rocket mr-2"></i>Entrepreneurs at the cutting edge of technological innovation</li>
            <li><i class="fas fa-globe mr-2"></i>Sophisticated global investors with strategic perspectives</li>
            <li><i class="fas fa-users mr-2"></i>Influential policy makers and industry shapers who drive market evolution</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</div>