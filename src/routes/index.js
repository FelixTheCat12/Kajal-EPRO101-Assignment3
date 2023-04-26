export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/home-index"),
  },
  {
    path: "/design-and-implementation-of-educational-program-and-practice",
    name: "p1",
    component: () => import("@/views/home/p1-index"),
  },
  {
    path: "/relationships-partnerships-and–collaborating-with-families-communities-and-children",
    name: "p2",
    component: () => import("@/views/home/p2-index"),
  },
  {
    path: "/dignity-equity-diversity-cultural-responsiveness-and-inclusion-within-early-childhood",
    name: "p3",
    component: () => import("@/views/home/p3-index"),
  },
  {
    path: "/respecting-and-including-aboriginal-and-torres-strait-islander-peoples-and-cultures-in-early-childhood",
    name: "p4",
    component: () => import("@/views/home/p4-index"),
  },
  {
    path: "/reference-list",
    name: "references",
    component: () => import("@/views/reference/reference-index"),
  },
  {
    path: "/conclusion",
    name: "conclusion",
    component: () => import("@/views/home/conclusion-index"),
  },
];
