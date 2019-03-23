<template>
  <div id="filters">
    <h2>Show:</h2>
    <div id="filter-buttons">
      <FilterButton v-for='filterText in filterTypes' :filterText='filterText' :key='filterText' />
    </div>
  </div>
</template>

<script>
import FilterButton from './FilterButton.vue'
import { mapState } from 'vuex';

export default {
  name: "Filters",
  components: { FilterButton },
  computed: {
    ...mapState(['filterTypes'])
  }
}
</script>

<style>
#filters {
  margin-top: 50px;
}

#filter-buttons {
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
