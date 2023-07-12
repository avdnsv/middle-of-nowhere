<script>
import IconChevronLeft from "./icons/IconChevronLeft.vue";
import IconChevronRight from "./icons/IconChevronRight.vue";
import LaptopImage from "./LaptopImage.vue";

export default {
  components: {
    IconChevronLeft,
    IconChevronRight,
    LaptopImage,
  },
  props: {
    projects: {
      type: Array,
    },
  },
  data() {
    return {
      currentItem: 0,
    };
  },
  methods: {
    previousItem() {
      if (this.currentItem > 0) this.currentItem--;
    },
    nextItem() {
      return this.currentItem >= this.projects.length - 1
        ? (this.currentItem = 0)
        : this.currentItem++;
    },
  },
  computed: {
    currentItemName() {
      return this.projects[this.currentItem].name;
    },
  },
  mounted() {
    let context = this;
    setInterval(() => {
      context.nextItem();
    }, 5000);
  },
};
</script>

<template>
  <p class="font-bold mb-4">{{ currentItemName }}</p>
  <div class="flex items-center justify-center gap-3 sm:gap-6 mb-4">
    <button class="p-2" @click="previousItem">
      <icon-chevron-left />
    </button>
    <div class="relative flex justify-center items-center">
      <laptop-image />
      <div class="absolute z-1 w-[224px] h-[140px] overflow-hidden">
        <div
          class="flex gap-4 w-max h-full bg-black transition-all ease-in-out duration-500"
          :style="{ 'margin-left': '-' + 240 * currentItem + 'px' }"
        >
          <a
            class="flex"
            v-for="project in projects"
            :href="project.link"
            target="_blank"
          >
            <img
              :src="project.img"
              :alt="project.name"
              :key="project.name"
              width="224"
              height="140"
            />
          </a>
        </div>
      </div>
    </div>
    <button class="p-2" @click="nextItem">
      <icon-chevron-right />
    </button>
  </div>
  <div class="flex justify-center m-auto gap-3">
    <a
      v-for="item in projects.length"
      :class="[
        'transition-all',
        'ease-in-out',
        'duration-500',
        'rounded-full',
        'w-[6px]',
        'h-[6px]',
        item == currentItem + 1 ? 'bg-periwinkle ' : 'bg-black',
        item == currentItem + 1 ? 'dark:bg-periwinkle ' : 'dark:bg-white',
      ]"
      @click.prevent="currentItem = item - 1"
      href=""
    ></a>
  </div>
</template>
