<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Todo's</h2>
    <input
      v-model="newTodoVal"
      v-on:keyup.enter='newTodo(newTodoVal)'
      placeholder='Add new todo'>
    <input
      v-model='filteredVal'
      placeholder='Enter filtered value'
    >
    <ul>
      <li
          v-for='item in filter(items)' :key='item.id'
          class='todo' v-bind:class='item.done ? "done" : "inprogress"'
          v-on:click="todoItemClick(item)"
        >
        <button
          v-on:click.stop='edit(item)'
          class='edit'
        > Edit </button>
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
        items: this.$store.state.todos,
        newTodoVal: '',
        itemsLastKey: this.$store.state.todos.length,
        filteredVal: '',
      };
    },
    methods: {
      edit(item) {
        this.$router.push({
          name: 'Edit',
          params: {
            id: item.id,
          },
        });
      },
      remove(item) {
        this.$store.commit('TODOS_REMOVE', item);
      },
      todoItemClick(item) {
        item.done = !item.done; // eslint-disable-line
      },
      newTodo(val) {
        if (val !== '') {
          const newTodo = {
            id: this.itemsLastKey + 1,
            description: val,
            done: false,
          };

          this.$store.commit('TODOS_ADD', newTodo);
          this.newTodoVal = '';
        }
      },
      filter(items) { // Maybe move to calc?
        if (this.filteredVal === '') {
          return items;
        }

        return this.items.filter(item => {
          return item.description.indexOf(this.filteredVal) !== -1;
        });
      },
    },
    // calculate: {
      
    // },
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
  .edit {
    position: absolute;
    left: -80px;
    width: 50px;
    border-radius: 5px;
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
    background-color: gray;
  }
  .mark {
    position: absolute;
    left: 100%;
    width: 100px;
  }
</style>
