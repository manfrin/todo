<template>
  <div
    @click="setFilter"
    class="filter-button"
    :class="[isActive ? 'selected' : '']"
  >
    {{ filterText }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FilterType",
  props: {
    filterText: String
  },
  methods: {
    setFilter() {
      this.$store.dispatch("setFilter", this.filterText);
    }
  },
  computed: {
    ...mapState(["filterType"]),
    isActive() {
      return this.filterType === this.filterText;
    }
  }
};
</script>

<style>
.filter-button {
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  color: #476074;
  background-color: #fff;
  box-shadow: #333 1px 1px;
  border: 2px solid #476074;
  display: inline-flex;
  font-size: 0.5em;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 600;
}
.selected {
  color: #fff;
  background-color: #476074;
  border: 2px solid #333;
}
</style>
