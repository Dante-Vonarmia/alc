<script>
  let newsItems = [
    {
      title: "Groundbreaking investment announcements",
      description: "We've made new investments in cutting-edge AI and digital transformation technologies.",
      fullContent: "Full content of the groundbreaking investment announcements, including the names of companies and specific technologies we are investing in, with deep dives into the projects and goals."
    },
    {
      title: "Portfolio company breakthroughs",
      description: "Our portfolio companies are achieving major breakthroughs in their respective fields.",
      fullContent: "Details on the recent portfolio company breakthroughs, including specific milestones and the impact on their industries."
    },
    {
      title: "Strategic fund developments",
      description: "We have launched new funds aimed at accelerating digital growth in Asia.",
      fullContent: "In-depth look at the strategic fund developments, including goals, sectors targeted, and our strategies for supporting innovation in the region."
    },
    {
      title: "Thought leadership and market insights",
      description: "We are providing key insights into the future of the digital economy.",
      fullContent: "Detailed insights and thought leadership pieces, discussing the future of the digital economy, trends, and key drivers of transformation in various sectors."
    },
    // Add more items here if needed...
  ];

  // 每页显示的新闻条目数量
  const itemsPerPage = 3;

  // 当前页
  let currentPage = 1;

  // showFullContent 数组来追踪每个新闻的展开状态
  let showFullContent = new Array(newsItems.length).fill(false);

  // 响应式计算当前页显示的新闻条目
  $: pagedNewsItems = newsItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // 上一页
  function goToPreviousPage() {
    if (currentPage > 1) {
      currentPage--;
    }
  }

  // 下一页
  function goToNextPage() {
    if (currentPage * itemsPerPage < newsItems.length) {
      currentPage++;
    }
  }
</script>

<div class="px-6 py-16 bg-gray-100">
  <!-- Section Title and Subtitle -->
  <div class="text-center">
    <h2 class="text-4xl font-bold text-gray-900">News & Updates</h2>
    <p class="mt-4 text-xl text-gray-700">Innovation in Motion</p>
  </div>

  <!-- Section Description -->
  <div class="mt-8 text-center text-lg text-gray-600 max-w-3xl mx-auto">
    <p>Discover the latest developments in our journey to transform the digital economy:</p>
  </div>

  <!-- News List -->
  <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    {#each pagedNewsItems as item, index}
      <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 class="text-2xl font-semibold text-gray-800">{item.title}</h3>
        <p class="mt-4 text-gray-600">{item.description}</p>

        <!-- Read More Toggle -->
        <button
          class="mt-4 text-blue-500 hover:underline"
          on:click={() => showFullContent[index] = !showFullContent[index]}
        >
          {#if showFullContent[index]}
            Read Less
          {:else}
            Read More
          {/if}
        </button>

        {#if showFullContent[index]}
          <p class="mt-4 text-gray-700">{item.fullContent}</p>
        {/if}
      </div>
    {/each}
  </div>

  <!-- Pagination Controls -->
  <div class="mt-8 text-center">
    <button
      class="px-4 py-2 bg-gray-300 rounded-md text-gray-700 hover:bg-gray-400"
      on:click={goToPreviousPage}
      disabled={currentPage === 1}
    >
      Previous
    </button>
    <span class="mx-4 text-xl">{currentPage}</span>
    <button
      class="px-4 py-2 bg-gray-300 rounded-md text-gray-700 hover:bg-gray-400"
      on:click={goToNextPage}
      disabled={currentPage * itemsPerPage >= newsItems.length}
    >
      Next
    </button>
  </div>
</div>
