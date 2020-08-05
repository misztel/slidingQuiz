<template>
  <div class="main">
    <div class="cards">
      <Card
        v-for="(card, index) in cards"
        :key="card.id"
        :card="{card:card.question, index: -index}"
        :is-current="index === 0"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: {
    Card,
  },

  computed: {
    cards() {
      return this.$store.getters.cards;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/index.scss";

.main{
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cards {
  position: relative;
  display: flex;
  height: 400px;
  width: 300px;
  background-color: #000;
  z-index: 0;
}
</style>
