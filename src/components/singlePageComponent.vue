<template>
  <a>
    <div class="item-wrapper d-flex flex-column mb-4" @click="onEmmit(card.id)">
      <img
        class="mb-3"
        :src="require(`@/assets/img/${card.img}`)"
        :alt="card.img"
      />

      <h3 class="">{{ card.title }}</h3>
      <div class="description">
        {{ card.text | readMore }}
        <br />
        <span v-if="!readMore">Читать далее ...</span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onEmmit(id) {
      this.$emit("onNavigate", id);
    },
  },
};
</script>