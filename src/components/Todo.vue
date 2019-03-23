<template>
  <div class="todo" :class='classObject'>
    <Checkmark :checked='todo.completed' :id='todo.id' /> <span>{{ todo.text }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Checkmark from './Checkmark.vue'

export default {
  name: "Todo",
  props: {
    todo: Object
  },
  components: {
    Checkmark
  },
  computed: {
    visibleInFilters() {
      return this.todo.completed ? 
        ['all', 'completed'] :
        ['all', 'active']
    },
    shouldShow() {
      return this.visibleInFilters.includes(this.filterType)
    },
    classObject() {
      return {
        completed: this.todo.completed,
        hidden: !this.shouldShow
      }
    },
    ...mapState(['filterType']),
  },

}
</script>

<style scoped>
.todo {
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  margin: 20px 20px 20px 0;
  transition: 1s;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}

.todo:last-of-type {
  border: 0;
}

.hidden {
  display: none;
  transition: 1s;
}

.completed {
  text-decoration: line-through;
  transition: 1s;
}

span {
  padding-left: 30px;
}
</style>
