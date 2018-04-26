import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const INIT_TODOS = 'INIT_TODOS';
export const TODOS_ADD = 'TODOS_ADD';
export const TODOS_REMOVE = 'TODOS_REMOVE';
export const TODOS_EDIT = 'TODOS_EDIT';
export const TODOS_ARCHIVE = 'TODOS_ARCHIVE';
export const TODOS_UNARCHIVE = 'TODOS_UNARCHIVE';

const store = new Vuex.Store({
    state: {
        todos: [
          {
            id: 0, description: 'Create Vuejs app', done: true, archive: false,
          },
          {
            id: 1, description: 'Learn Vuejs', done: false, archive: false,
          },
          {
            id: 2, description: 'Learn Vuejs in depth', done: false, archive: true,
          },
        ],
    },
    mutations: {
        [TODOS_ADD](state, payload) {
            state.todos.push(payload);
        },
        [TODOS_REMOVE](state, payload) {
            const todos = Object.assign(state.todos);
            todos.splice(todos.indexOf(payload), 1);
        },
      [TODOS_EDIT](state, payload) {
            const todos = Object.assign(state.todos, payload);

            state.todos = [
                ...todos,
            ];
        },
      [INIT_TODOS](state, payload) {
            state.todos.splice(0, state.todos.length, ...payload);
        },
      [TODOS_ARCHIVE](state, payload) {
        const todos = Object.assign(state.todos);
        const todo = todos[todos.indexOf(payload)];
        todo.archive = true;
        state.todos = [
          ...todos
        ];
        state.todos.splice()
        console.log(state.todos);
      },
      [TODOS_UNARCHIVE](state, payload) {
        const todos = Object.assign(state.todos);
        state.todos[todos.indexOf(payload)].archive = false;
      },
    },
});

export default store;
