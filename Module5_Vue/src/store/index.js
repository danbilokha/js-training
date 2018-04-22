import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const TODOS_ADD = 'TODOS_ADD';
export const TODOS_REMOVE = 'TODOS_REMOVE';
export const TODOS_EDIT = 'TODOS_EDIT';

const store = new Vuex.Store({
    state: {
        todos: [
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
    },
    mutations: {
        [TODOS_ADD](state, payload) {
            state.todos.push(payload);
        },
        [TODOS_REMOVE](state, payload) {
            const todos = Object.assign(state.todos);
            todos.splice(todos.indexOf(payload), 1);

            state.todos = [
                ...todos,
            ];
        },
        [TODOS_EDIT](state, payload) {
            const todos = Object.assign(state.todos, payload);

            state.todos = [
                ...todos,
            ];
        },
    },
});

export default store;
