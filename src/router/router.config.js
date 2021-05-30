export const routes = [
  {
    path: "/",
    name: "Index",
    component: () =>
      import(/* webpackChunkName: "public" */ "../views/public/index.vue"),
    children: [
      {
        path: "/Home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "Editor" */ "../views/home/Home.vue")
      },
      {
        path: "/Editor",
        name: "Editor",
        component: () =>
          import(/* webpackChunkName: "Editor" */ "../views/editor/Editor.vue")
      },
      {
        path: "/ui",
        name: "ui",
        component: () =>
          import(/* webpackChunkName: "ui" */ "../views/ui/index.vue")
      },
      {
        path: "/memo",
        name: "memo",
        component: () =>
          import(/* webpackChunkName: "memo" */ "../views/memo/index.vue")
      },
    ]
  },

];

