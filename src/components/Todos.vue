<template>
  <div id="todos">
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Todo from "./Todo.vue";

export default {
  name: "Todos",
  components: {
    Todo
  },
  computed: {
    ...mapState(["todos"])
  }
};
</script>

<style></style>
