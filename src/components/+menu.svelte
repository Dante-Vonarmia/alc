<script>
  import { onMount } from 'svelte';

  let isSticky = false;  // 控制菜单是否粘性
  let menu = null;       // 用于引用菜单 DOM
  let isOpen = false;
  
  const toggleMenu = () => {
    isOpen = !isOpen;
  };

  // 监听滚动事件
  const onScroll = () => {
    if (window.scrollY > 100) {
      isSticky = true;  // 当滚动超过100px时，变得细长
    } else {
      isSticky = false;
    }
  };

  // 滚动到相应位置
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 确保滚动到目标元素顶部，阻止其他影响
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start', 
        inline: 'nearest' 
      });
    }

    // 如果是手机端，点击后自动关闭菜单
    if (window.innerWidth <= 1024) {
      isOpen = false;
    }
  };


  // 注册滚动监听器
  onMount(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });
</script>

<nav bind:this={menu} class={`nav w-full bg-transparent text-white p-4 backdrop-blur-lg bg-opacity-20 transition-all duration-300 ${isSticky ? 'sticky-nav' : 'absolute'}`}>
  <!-- Logo -->
  <div class="flex justify-between items-center">
    <div class="text-2xl font-bold">ALC Capital</div>

    <!-- Hamburger Menu for mobile -->
    <div class="block lg:hidden" on:click={toggleMenu}>
      <button class="text-white">
        <i class={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} style="font-size: 24px;"></i>
      </button>
    </div>

    <!-- Desktop Menu -->
    <div class="hidden lg:flex space-x-6">
      <a href="javascript:void(0)" on:click={() => scrollToSection('who-we-are')} class="hover:text-gray-400">Who We Are</a>
      <a href="javascript:void(0)" on:click={() => scrollToSection('leadership')} class="hover:text-gray-400">Leadership & Team</a>
      <a href="javascript:void(0)" on:click={() => scrollToSection('what-we-do')} class="hover:text-gray-400">What We Do</a>
      <a href="javascript:void(0)" on:click={() => scrollToSection('our-impact')} class="hover:text-gray-400">Our Impact</a>
      <a href="javascript:void(0)" on:click={() => scrollToSection('news')} class="hover:text-gray-400">News & Updates</a>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isOpen}
  <div class="lg:hidden mt-4 space-y-4 bg-opacity-80 bg-black backdrop-blur-sm rounded-lg transition-all duration-300 ease-in-out">
    <a href="javascript:void(0)" on:click={() => scrollToSection('who-we-are')} class="block text-lg p-2">Who We Are</a>
    <a href="javascript:void(0)" on:click={() => scrollToSection('leadership')} class="block text-lg p-2">Leadership & Team</a>
    <a href="javascript:void(0)" on:click={() => scrollToSection('what-we-do')} class="block text-lg p-2">What We Do</a>
    <a href="javascript:void(0)" on:click={() => scrollToSection('our-impact')} class="block text-lg p-2">Our Impact</a>
    <a href="javascript:void(0)" on:click={() => scrollToSection('news')} class="block text-lg p-2">News & Updates</a>
  </div>
  {/if}
</nav>
