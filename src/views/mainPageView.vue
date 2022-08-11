<template>
  <div class="container">
    <div class="grid d-flex justify-content-between flex-wrap">
      <single-page-component
        v-for="card in pages.pages"
        :key="card.id"
        :card="card"
        @onNavigate="navigate"
      />
    </div>
  </div>
</template>

<script>
import singlePageComponent from "@/components/singlePageComponent.vue";

export default {
  components: { singlePageComponent },
  computed: {
    pages() {
      return this.$store.getters["getPages"];
    },
  },
  methods: {
    navigate(id) {
      this.$router.push({ name: "single", params: { id: id } });
    },
  },
};
</script>
