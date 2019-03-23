<template>
  <div id="app">
    <h1>TO DO:</h1>
    <Todos />
    <AddTask />
    <Filters />
    <Demo />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import AddTask from "./components/AddTask.vue";
import Filters from "./components/Filters.vue";
import Demo from "./components/Demo.vue";

export default {
  name: "app",
  components: {
    Todos,
    AddTask,
    Filters,
    Demo
  }
};
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 2.2em;
  text-align: left;
  color: #1ba29c;
  max-width: 500px;
  margin: 0 auto;
}

h1 {
  color: #333;
  font-size: 0.8em;
  letter-spacing: 5px;
}
</style>
