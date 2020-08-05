<template>
  <div
    class="card"
    @mousedown="counter"
    :class="{isCurrent: isCurrent, right__confirmed: rightAnswer, left__confirmed: leftAnswer}"
    :style="{'z-index': card.index, 'transform': `translate(${drag}px) rotate(${deg}deg`}"
  >
    <h3 class="cardTitle"> {{ card.card }} <span>{{card.index}}</span></h3>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },

    isCurrent: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      cardData: this.$props.card,
      drag: 0,
      deg: 0,
      max: 350,
      min: 90,
      leftAnswer: false,
      rightAnswer: false,
    };
  },
  methods: {
    counter(event) {
      console.log(event.target);
      event.target.classList.remove('go__back');
      const startX = event.clientX;
      onmousemove = (e) => {
        this.drag = (e.clientX - startX);
        this.deg = this.drag / 15;
        console.log(this.drag);
      };

      onmouseup = () => {
        console.log('up');
        onmousemove = null;
        if (this.drag < this.min && this.drag > -this.min) {
          event.target.classList.add('go__back');
          console.log('back');
          this.drag = 0;
          this.deg = 0;
        } else {
          console.log('relase');

          if (this.drag >= this.min && this.drag < this.max) {
            console.log('cardData', this.cardData.index);
            this.rightAnswer = true;
            this.$store.commit('delCard'); // delete first card from stack after vote
          } else if (this.drag <= -this.min && this.drag > -this.max) {
            this.leftAnswer = true;
            this.$store.commit('delCard'); // delete first card from stack after vote
          }

          this.drag = 0;
          this.deg = 0;
        }
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/index.scss";

.card {
  position: absolute;
  cursor: pointer;
  display: flex;
  max-height: 350px;
  width: 300px;
  align-content: center;
  align-items: center;
  border-radius: 25px;
  margin: auto;
  font-size: 20px;
  font-weight: 600;
  color: $text;
  background-image: linear-gradient(
    -180deg,
    $secondary-gradient-start 0%,
    $secondary-gradient-end 100%
  );
  transform-origin: 50%, 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  user-select: none;
  will-change: transform, opacity;
  pointer-events: none;

  height: 100vw;
}
.cardTitle{
    width: 100%;
}

.go__back{
  transition: transform 0.3s ease-out;
}

.left__confirmed {
  transform: translate(-350px, 150px) rotate(-45deg)!important;
  opacity: 0;
  transition: all 0.4s ease;
}

.right__confirmed{
  transform: translate(350px, 150px) rotate(45deg)!important;
  opacity: 0;
  transition: all 0.4s ease;
}
.isCurrent{
  pointer-events: auto;
}

.answer{
  color: blue;
}
.right{
  color: green;
}
.left{
  color: red;
}

</style>
