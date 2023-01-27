const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/lists',
    component: () => import('pages/ListDetailPage.vue'),
  },
  {
    path: '/create-task',
    component: () => import('pages/CreateTaskPage.vue'),
  },
  {
    path: '/tasks',
    component: () => import('pages/TaskDetailPage.vue')
  },
  {
    path: '/tasks/update',
    component: () => import('pages/UpdateTaskPage.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
]

export default routes
