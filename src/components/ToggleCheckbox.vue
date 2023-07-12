<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
    },
  },
  methods: {
    toggle() {
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>

<template>
  <div
    class="w-11 bg-pink rounded-full cursor-pointer overflow-hidden"
    @click="toggle"
  >
    <div
      :class="[
        'flex',
        'gap-1',
        'w-fit',
        'p-1',
        'transition-all',
        'ease-in',
        'duration-200',
        { '-translate-x-5': modelValue },
      ]"
    >
      <slot name="first-icon"></slot>
      <div class="w-4 h-4 bg-white rounded-full shadow" />
      <slot name="second-icon"></slot>
    </div>
  </div>
</template>
