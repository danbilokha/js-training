<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Todo's</h2>
    <input
      v-model="newTodoVal"
      v-on:keyup.enter='newTodo(newTodoVal)'
      placeholder='Add new todo'>
    <ul>
      <li
          v-for='item in items' :key='item.id'
          class='todo' v-bind:class='item.done ? "done" : "inprogress"'
          v-on:click="todoItemClick(item)"
        >
        <button
          v-on:click.stop='remove(item)'
          class='remove'
        > - </button>
        <span> {{ item.id }}. </span>
        <span> {{item.description}} </span>
        <span class='mark done-mark' v-if='item.done'> Done! </span>
        <span class='mark done-mark' v-if='!item.done'> In progress </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Todo',
    data() {
      return {
        msg: 'Welcome to Todo\'s',
        items: [
          {
            id: 0, description: 'Create Vuejs app', done: true,
          },
          {
            id: 1, description: 'Learn Vuejs', done: false,
          },
          {
            id: 2, description: 'Learn Vuejs in depth', done: false,
          },
        ],
        newTodoVal: '',
        itemsLastKey: 2,
      };
    },
    methods: {
      remove(item) {
        this.items.splice(this.items.indexOf(item), 1);
      },
      todoItemClick(item) {
        item.done = !item.done; // eslint-disable-line
      },
      newTodo(val) {
        if (val !== '') {
          this.items.push({
            id: this.itemsLastKey + 1,
            description: val,
            done: false,
          });

          this.itemsLastKey += 1;

          this.newTodoVal = '';
        }
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    position: relative;
    text-align: left;
  }
  a {
    color: #42b983;
  }
  .remove {
    position: absolute;
    left: -25px;
    width: 20px;
    border-radius: 5px;
  }
  .todo {
    margin: 5px 25%;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
    background-color: #00FFFF;
  }
  .done {
    text-decoration: line-through;
  }
  .mark {
    position: absolute;
    left: 100%;
    width: 100px;
  }
</style>
