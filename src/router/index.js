import vue from "vue";
import Router from "vue-router";
import Helloworld from "@/components/HelloWorld.vue";
import Link from "@/components/link.vue";
import Login from "@/components/login.vue";
import Navbar from "@/components/navbar.vue";
import Register from "@/components/register.vue";
import Presensi from "@/components/presensi.vue";
import statistik from "@/components/statistik.vue";
import Presensi1 from "@/components/presensi1.vue";
import statistik1 from "@/components/statistik1.vue";
import edit from "@/components/edit.vue";
import beranda from '@/components/beranda.vue'
import contact from '@/components/contact.vue'
import tentang from '@/components/tentang.vue'
import pm from '@/components/pm.vue'
import pd from '@/components/pd.vue'
import pa from '@/components/pa.vue'
import pm1 from '@/components/pm1.vue'
import pd1 from '@/components/pd1.vue'
import pa1 from '@/components/pa1.vue'
import statistik2 from "@/components/statistik2.vue";


vue.use(Router);

function configRouters() {
  return [
    {
      path: "/",
      name: "Helloworld",
      component: Helloworld,
    },
    {
      path: "/presensi",
      name: "Presensi",
      component: Presensi,
    },
    {
      path: "/statistik",
      name: "statistik",
      component: statistik,
    },
    {
      path: "/presensi1",
      name: "Presensi1",
      component: Presensi1,
    },
    {
      path: "/statistik1",
      name: "statistik1",
      component: statistik1,
    },
    {
      path: "/statistik2",
      name: "statistik2",
      component: statistik2,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/link",
      name: "Link",
      component: Link,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/navbar",
      name: "Navbar",
      component: Navbar,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: edit
    },
    {
      path:'/beranda',
      name:'beranda',
      component: beranda

  },
  {
      path:'/contact',
      name:'contact',
      component: contact

  },
  {
      path:'/tentang',
      name:'tentang',
      component: tentang

  },
  {
      path:'/pm',
      name:'pm',
      component: pm

  },
  {
      path:'/pd',
      name:'pd',
      component: pd

  },
  {
      path:'/pa',
      name:'pa',
      component: pa

  },
  {
      path:'/pm1',
      name:'pm1',
      component: pm1

  },
  {
      path:'/pd1',
      name:'pd1',
      component: pd1

  },
  {
      path:'/pa1',
      name:'pa1',
      component: pa1

  },
  ];
}

const link = new Router({
  mode: "history",
  routes: configRouters(),
});
export default link;
