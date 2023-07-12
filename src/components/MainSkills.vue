<template>
  <section class="grid place-items-center">
    <ul
      class="flex items-center justify-around sm:justify-center gap-6 flex-wrap max-w-[14rem] sm:max-w-full text-white dark:text-black"
    >
      <li
        class="vue rounded-full bg-periwinkle w-20 leading-[80px] scale-0 animate-skaling"
      >
        Vue.js
      </li>
      <li
        class="js rounded-full bg-periwinkle w-28 leading-[112px] scale-0 animate-skaling"
      >
        JavaScript
      </li>
      <li
        class="git rounded-full bg-periwinkle w-14 leading-[56px] scale-0 animate-skaling"
      >
        Git
      </li>
      <li
        class="ux rounded-full bg-periwinkle w-20 leading-[80px] scale-0 animate-skaling"
      >
        UX/UI
      </li>
    </ul>
  </section>
</template>

<style>
.vue {
  animation-delay: 0.5s;
}

.git {
  animation-delay: 0.3s;
}

.ux {
  animation-delay: 0.6s;
}
</style>
