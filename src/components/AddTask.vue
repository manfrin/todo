<template>
  <div id="addTask" :class="[active ? 'active' : '']">
    <input
      type="text"
      v-model="text"
      ref="newTaskBox"
      @keyup.enter="addNewTask"
      @keyup.escape="reset"
    />
    <div id="buttonContainer">
      <div id="cancelButton" class="addButton" @click="reset">
        Cancel
      </div>
      <div id="addTaskButton" class="addButton" @click="newTaskOrSubmit">
        {{ addTaskButtonText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      text: "",
      active: false
    };
  },
  methods: {
    newTaskOrSubmit() {
      this.active ? this.addNewTask() : this.newTask();
    },
    newTask() {
      this.active = true;
      this.$refs.newTaskBox.focus();
    },
    addNewTask() {
      this.$store.dispatch("addTask", this.text);
      this.reset();
    },
    reset() {
      this.active = false;
      this.text = "";
    }
  },
  computed: {
    addTaskButtonText() {
      return this.active ? "Submit" : "+ Add Task";
    }
  }
};
</script>

<style>
#buttonContainer {
  display: flex;
  width: 100%;
}

input {
  display: block;
  width: 100%;
  left: 0;
  height: 0;
  overflow: hidden;
  outline: none;
  border: 0;
  box-sizing: border-box;
  background-color: white;
  font-size: 34px;
  transition: 1s;
}

.active > input {
  border: 3px solid #1ba29c;
  margin: 20px 0 20px 0;
  padding: 15px;
  height: 44px;
}

.addButton {
  width: 100%;
  border-radius: 10px;
  color: #fff;
  display: inline-flex;
  justify-content: center;
  font-size: 0.7em;
  letter-spacing: 5px;
  line-height: 2em;
  text-transform: uppercase;
  font-weight: 700;
  transition: 0.5s;
}

#addTaskButton {
  background-color: #1ba29c;
}

#cancelButton {
  background-color: #a21b32;
  overflow: hidden;
  width: 0%;
}

.active > #buttonContainer > #cancelButton {
  width: 50%;
}

.active > #buttonContainer > #addTaskButton {
  width: 50%;
}
</style>
