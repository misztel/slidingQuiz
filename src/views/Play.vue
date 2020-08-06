<template>
  <div class="play">
    <h1 @click="counter">Welcome to the Quiz</h1>
    <CardsStack />
    <Score />
  </div>
</template>

<script>
import CardsStack from '../components/CardsStack.vue';
import Score from '../components/Score.vue';

export default {
  components: {
    CardsStack,
    Score,
  },

  name: 'Play',

  data() {
    return {
      count: 0,
    };
  },
  methods: {
    counter(event) {
      this.count += 1;
      if (event) {
        console.log(event.target.tagName);
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
