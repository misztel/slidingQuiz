<template>
  <div class="score">Score: {{score}}</div>
</template>

<script>
export default {
  components: {

  },

  computed: {
    score() {
      return this.$store.getters.score;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/index.scss";

.score{
  color: red;
}
</style>
