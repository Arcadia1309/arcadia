<template>
  <div class="max-w-full mx-auto mb-20">
    <div class="relative text-black rounded-lg h-30 flex items-center justify-center px-2">
      <transition name="fade" mode="out-in">
        <blockquote :key="current" class="text-center">
          <p class="text-lg italic flex">
            <svg class="h-5 w-5 mr-5 sm:h-4 sm:w-4 sm:mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path d="M113.51 100.6 88.28 55.97C32.35 87.58 24 123.13 24 141.51v102.53h102.53V141.51H75.26c0-8.9 10.02-24.96 38.25-40.91zm111.23 40.91c0-8.9 10.02-24.96 38.24-40.91l-25.22-44.63c-55.93 31.61-64.28 67.16-64.28 85.54v102.53H276V141.51h-51.26z" fill="#FFF"></path></svg>
            {{ quotes[current][0] }}
        </p>
          <p class="text-sm italic mt-2">-- {{ quotes[current][1] }}</p>
        </blockquote>
      </transition>
      <button
        class="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-25 hover:bg-opacity-50 rounded-full hidden"
        @click="prevQuote"
      >&#8592;</button>
      <button
        class="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-25 hover:bg-opacity-50 rounded-full hidden"
        @click="nextQuote"
      >&#8594;</button>
    </div>
  </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    const quotes = [
        ["Justice delayed is justice denied.","William E. Gladstone"],
        ["The rule of law is the bedrock of democracy.","Chief Justice N.V. Ramana"],
        ["Injustice anywhere is a threat to justice everywhere.","Martin Luther King Jr.Martin Luther King Jr."],
        ["Equal justice under law is not just a caption on the façade of the Supreme Court building, it is perhaps the most inspiring ideal of our society.","Chief Justice Earl Warren"]
    ]
    const current = ref(0);

    function prevQuote() {
    current.value = (current.value - 1 + quotes.length) % quotes.length;
    }
    function nextQuote() {
    current.value = (current.value + 1) % quotes.length;
    }

    // Auto-advance logic
    let intervalId = null;

    onMounted(() => {
    intervalId = setInterval(() => {
        nextQuote();
    }, 5000); // 5 seconds
    });

    onUnmounted(() => {
    if (intervalId) clearInterval(intervalId);
    });
</script>

<style>
    .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
    }
    .fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>
