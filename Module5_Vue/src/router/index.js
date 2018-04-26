import Vue from 'vue';
import Router from 'vue-router';
import Todo from '@/components/Todo/Todo';
import Edit from '@/components/Todo/Edit';
import Archive from '@/components/Todo/Archive';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo,
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit,
    },
    {
      path: '/archive',
      name: 'Archive',
      component: Archive,
    },
  ],
});
