import Vue from "vue";
import Router from "vue-router";
import Home from './Home.vue';
import Books from '@/components/Book/Books';
import CreateBook from '@/components/Book/CreateBook';
import Profile from '@/components/User/Profile';
import SignUp from '@/components/User/SignUp';
import SignIn from '@/components/User/SignIn';


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/books",
      name: "Books",
      component: Books
    },
    {
      path: "/book/new",
      name: "CreateBook",
      component: CreateBook
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/signin",
      name: "SignIn",
      component: SignIn
    }
  ]
});
