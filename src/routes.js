import ListView from "./views/ListView/";
import AddView from "./views/AddView/";

const routes = [
  {
    path: "/home",
    component: ListView,
  },
  {
    path: "/add-link",
    component: AddView,
  },
];

export default routes;
