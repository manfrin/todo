<template>
  <svg
    class="checkmark"
    @click="toggleCompletion"
    :class="[checked ? 'checked' : '']"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
  >
    <circle
      class="checkmark__circle"
      cx="26"
      cy="26"
      r="25"
      fill="none"
    ></circle>
    <path
      class="checkmark__check"
      fill="none"
      d="M14.1 27.2l7.1 7.2 26.7-26.8"
    ></path>
  </svg>
</template>

<script>
export default {
  name: "Checkmark",
  props: {
    checked: Boolean,
    id: Number
  },
  methods: {
    toggleCompletion() {
      this.$store.dispatch("toggleCompleted", this.id);
    }
  }
};
</script>

<style>
.checkmark {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-block;
  stroke-width: 2;
  stroke: #1ba29c;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px #fff;
}

.checked.checkmark {
  box-shadow: inset 0px 0px 0px #1ba29c;
  animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
}

.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 5;
  stroke-miterlimit: 10;
  stroke: #1ba29c;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checked > .checkmark__circle {
  stroke: #fff;
}

.checkmark__check {
  display: none;
}

.checked > path {
  display: inline-block;
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  stroke-width: 5;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #d4e6e6;
  }
}
</style>
