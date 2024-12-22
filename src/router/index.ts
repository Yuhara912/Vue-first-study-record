import { createRouter, createWebHistory } from 'vue-router';

import About from '@/views/AbourUs.vue';
import MainTodo from '@/views/MainTodo.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/mainTodo',
      name: 'mainTodo',
      component: MainTodo
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/NotFound.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogShow.vue')
    },
    {
      path: '/blog:id',
      name: 'blogid',
      component: () => import('@/views/BlogShow.vue')
    },
    {
      path: '/blog/:id',
      name: 'blogDtl',
      component: () => import('@/views/BlogDtl.vue')
    }
  ]
});

export default router;
