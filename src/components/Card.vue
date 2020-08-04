<template>
  <div
    class="card"
    @mousedown="counter"
    :class="{isCurrent: isCurrent}"
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
    };
  },
  methods: {
    counter(event) {
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
            event.target.classList.add('right__confirmed');
            // this.cardData.shift();
            // DELETE ITEM FROM ARRAY/OBJECT WITH QUESTIONS VUEX???
            console.log(this.card.card);
          } else if (this.drag <= -this.min && this.drag > -this.max) {
            event.target.classList.add('left__confirmed');
            // this.cardData.shift();
          }

          this.drag = 0;
          this.deg = 0;
        }
      };

      if (event) {
        console.log(this.cardData.card, this.count, event.clientX);
      }
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

</style>
