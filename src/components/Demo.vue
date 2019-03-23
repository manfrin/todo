<template>
  <div id="demo">
    <h2>Demo Mode:</h2>
    <div id="demo-buttons">
      <div @click="populate" class="filter-button">Populate with Data</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  methods: {
    populate() {
      this.$store.dispatch("populate");
    }
  }
};
</script>

<style>
#demo {
  margin-top: 50px;
}

#demo-buttons {
  display: flex;
  justify-content: space-between;
}

h2 {
  color: #333;
  font-size: 0.6em;
  letter-spacing: 5px;
  font-weight: 700;
  display: block;
  text-transform: uppercase;
}
</style>
