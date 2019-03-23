import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    filterType: "all",
    filterTypes: ["all", "active", "completed"]
  },
  mutations: {
    setFilter(state, filterType) {
      state.filterType = filterType;
    },
    toggleCompleted(state, id) {
      Vue.set(state.todos[id], "completed", !state.todos[id].completed);
    },
    addTask(state, newTaskText) {
      state.todos.push({
        id: state.todos.length,
        text: newTaskText,
        completed: false
      });
    },
    populate(state) {
      state.todos.push({ id: 0, text: "Buy dog treats", completed: true });
      state.todos.push({
        id: 1,
        text: "Feed treats to puppies",
        completed: false
      });
      state.todos.push({ id: 2, text: "Pet all the doggos", completed: false });
      state.todos.push({ id: 3, text: "See Isle of Dogs", completed: false });
    }
  },
  actions: {
    setFilter({ commit }, filterType) {
      commit("setFilter", filterType);
    },
    toggleCompleted({ commit }, id) {
      commit("toggleCompleted", id);
    },
    addTask({ commit }, newTaskText) {
      commit("addTask", newTaskText);
    },
    populate({ commit }) {
      commit("populate");
    }
  }
});
