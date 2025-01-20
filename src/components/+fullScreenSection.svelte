<script>
  export let backgroundColor = 'bg-white'; // 背景色，默认为白色
  export let children; // 子元素，传递的内容
</script>

<div class={`relative w-full h-screen ${backgroundColor}`}>
  <!-- 添加一个额外的 div，确保滚动到 section 顶部 -->
  <div class="absolute top-0 left-0 w-full h-0"></div>
  <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 px-4 sm:px-6 lg:px-12">
    <slot></slot> <!-- 使用 slot 插入传递的内容 -->
  </div>
</div>
