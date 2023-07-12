<script>
import MainProjects from "./components/MainProjects.vue";
import MainSkills from "./components/MainSkills.vue";
import MainContacts from "./components/MainContacts.vue";
import ToggleCheckbox from "./components/ToggleCheckbox.vue";
import IconSun from "./components/icons/IconSun.vue";
import IconMoon from "./components/icons/IconMoon.vue";

export default {
  components: {
    MainProjects,
    MainSkills,
    MainContacts,
    ToggleCheckbox,
    IconSun,
    IconMoon,
  },
  data() {
    return {
      sections: ["Projects", "Skills", "Contacts"],
      active: "Projects",
      isDarkMode: false,
    };
  },
  methods: {
    changeMode() {
      if (!this.isDarkMode) {
        document.querySelector("html").className = "light";
      } else {
        document.querySelector("html").className = "dark";
      }
    },
  },
  computed: {
    isProjects() {
      return this.active == "Projects" ? true : false;
    },
    isSkills() {
      return this.active == "Skills" ? true : false;
    },
    isContacts() {
      return this.active == "Contacts" ? true : false;
    },
  },
};
</script>

<template>
  <section class="absolute top-10 right-10">
    <toggle-checkbox v-model="isDarkMode" @click="changeMode">
      <template v-slot:first-icon><icon-moon /></template>
      <template v-slot:second-icon><icon-sun /></template>
    </toggle-checkbox>
  </section>
  <header>
    <h1 class="text-4xl font-bold mb-2">ALEKSANDR D.</h1>
    <h2 class="text-2xl mb-4">Junior Front-end Developer</h2>
    <nav>
      <ul class="flex justify-center gap-6 mb-8">
        <li v-for="section in sections">
          <a
            :class="[
              'decoration-periwinkle ',
              'decoration-2',
              'underline-offset-8',
              'hover:underline',
              { underline: active == section },
            ]"
            @click.prevent="active = section"
            href=""
            >{{ section }}</a
          >
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <main-projects v-show="isProjects" />
    <main-skills v-show="isSkills" />
    <main-contacts v-show="isContacts" />
  </main>
</template>
