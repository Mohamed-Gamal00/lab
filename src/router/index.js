import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import SignUpView from "../views/SignUpView.vue";
// import ProfileView from "../views/ProfileView.vue";
// import UpdateProfile from "../components/Profile/UpdateProfilCom.vue";
import ErrorPageView from "../views/ErrorPageView.vue";
// import LoginView from "../views/LoginView.vue";
import DashbordView from "../views/DashbordView.vue";
import DoctorsView from "../views/DoctorsView.vue";
import MembersView from "../views/MembersView.vue";
import ReportsView from "../views/ReportsView.vue";
import OrdersView from "../views/OrdersView.vue";
import ProvidersView from "../views/ProvidersView.vue";
import SettingView from "../views/SettingView.vue";
import PurchasesView from "../views/PurchasesView.vue";
import Es6View from "../views/Es6View.vue";
const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/es6",
    name: "es6",
    component: Es6View,
  },
  {
    path: "/dashboard",
    name: "dashbord",
    component: DashbordView,
  },
  {
    path: "/doctors",
    name: "doctors",
    component: DoctorsView,
  },
  {
    path: "/members",
    name: "members",
    component: MembersView,
  },
  {
    path: "/reports",
    name: "reports",
    component: ReportsView,
  },
  {
    path: "/orders",
    name: "orders",
    component: OrdersView,
  },
  {
    path: "/providers",
    name: "providers",
    component: ProvidersView,
  },
  {
    path: "/setting",
    name: "setting",
    component: SettingView,
  },
  {
    path: "/purchases",
    name: "purchases",
    component: PurchasesView,
  },
  {
    path: "/",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: LoginView,
  // },
  // {
  //   path: "/sign-up",
  //   name: "Signup",
  //   component: SignUpView,
  // },
  // {
  //   path: "/profile",
  //   name: "Profile",
  //   component: ProfileView,
  // },
  // {
  //   path: "/updateProfile",
  //   name: "UpdateProfile",
  //   component: UpdateProfile,
  // },
  //error page stay last
  {
    path: "/:catchAll(.*)",
    name: "Errorpage",
    component: ErrorPageView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
