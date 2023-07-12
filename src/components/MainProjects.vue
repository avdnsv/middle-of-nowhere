<script>
import CompCarousel from "./CompCarousel.vue";

export default {
  components: { CompCarousel },
  data() {
    return {
      projects: [
        {
          name: "In the Middle of Nowhere",
          img: "/middle.png",
          link: "https://inthemiddleofnowhere.online",
        },
        {
          name: "Blurrrr",
          img: "/blurrrr.png",
          link: "https://t.me/BlurrrrBot",
        },
        {
          name: "Arka",
          img: "/arka.png",
          link: "https://doarch.site",
        },
        {
          name: "DaAddress",
          img: "/daaddress.png",
          link: "https://t.me/DaAddressBot",
        },
      ],
    };
  },
};
</script>

<template>
  <section>
    <comp-carousel :projects="projects" />
  </section>
</template>
