<template>
  <div class="site-section site-section--primary">
    <h3 class="site-section__title">What do we do?</h3>
    <p class="text-small">You might not have heard of us, but we're the people behind the following impactful programmes</p>
    <div class="grid grid--4 grid--gap">
      <div class="grid grid--gap grid--white grid-item text-center" v-for="{ title, content } in gridItems" :key="title">
        <h4>{{ title }}</h4>
        <p class="text-xsmall">{{ content }}</p>
        <div>
          <button class="site-button site-button--red site-button--rounded site-button--border site-button--inverted">
            Read more
          </button>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button class="site-button site-button--red site-button--rounded site-button--inverted">
        More about what we do
      </button>
    </div>
  </div>
</template>

<script setup>
/**
  * All of the content in these components should be moved to props if they are being re-used. 
  */
const gridItems = [
  {
    title: "Get online week",
    content: "Lorem ipsum dolor sit amet"
  },
  {
    title: "Learn my way",
    content: "Lorem ipsum dolor sit amet"
  },
  {
    title: "Make it click",
    content: "Lorem ipsum dolor sit amet"
  },
  {
    title: "Digital you",
    content: "Lorem ipsum dolor sit amet"
  }
]
</script>