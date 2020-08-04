<template>
  <div class="play">
    <h1 @click="counter">Welcome to the Quiz</h1>
    <CardsStack />
  </div>
</template>

<script>
import CardsStack from '../components/CardsStack.vue';

export default {
  components: {
    CardsStack,
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
