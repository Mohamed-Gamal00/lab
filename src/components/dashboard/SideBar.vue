<template>
  <!-- navbar -->
  <div class="naavbar font">
    <!-- header -->
    <div class="row">
      <div class="mt-5">
        <span class="logo">logo</span>
        <strong><h3 class="fw-bold font text-center">معمل دياب</h3></strong>
      </div>
    </div>
    <ul>
      <router-link :to="{ name: 'dashbord' }" exact>
        <li>
          <span
            ><FontAwesome style="color: #bbc5d5" icon="house-chimney-window"
          /></span>
          <span style="margin-right: 26px">الرئيسية</span>
        </li>
      </router-link>
      <!-- reports -->
      <router-link :to="{ name: 'dashbord' }">
        <li class="mt-4">
          <span
            ><span><img src="@/assets/HOME/graph.svg" alt="" /></span>
          </span>
          <span style="margin-right: 26px">التقارير</span>
        </li>
      </router-link>
      <!-- الطلبات -->
      <router-link :to="{ name: 'dashbord' }">
        <li class="mt-4">
          <span
            ><span><img src="@/assets/HOME/graph.svg" alt="" /></span>
          </span>
          <span style="margin-right: 26px">الطلبات</span>
        </li>
      </router-link>
      <!-- الملخص -->
      <router-link :to="{ name: 'dashbord' }">
        <li class="mt-4">
          <span
            ><span><img src="@/assets/HOME/enquiries.svg" alt="" /></span
          ></span>
          <span style="margin-right: 26px">الملخص</span>
        </li>
      </router-link>
      <!-- الاطباء -->
      <router-link :to="{ name: 'doctors' }">
        <li class="mt-4">
          <span><FontAwesome style="color: #bbc5d5" icon="user-doctor" /></span>
          <span style="margin-right: 26px">الاطباء</span>
        </li>
      </router-link>
      <!-- الاعضاء -->
      <router-link :to="{ name: 'members' }">
        <li class="mt-4">
          <span
            ><span><img src="@/assets/HOME/users.svg" alt="" /></span
          ></span>
          <span style="margin-right: 26px">الاعضاء</span>
        </li>
      </router-link>
      <router-link :to="{ name: 'dashbord' }">
        <li class="mt-4">
          <span><FontAwesome style="color: #bbc5d5" icon="gear" /></span>
          <span style="margin-right: 26px">الاعدادات</span>
        </li>
      </router-link>
    </ul>
    <div class="d-flex justify-content-center loguot">
      <div>
        <a
          href="#"
          @click="logOut()"
          class="text-danger"
          style="text-decoration: none"
        >
          <span><img src="@/assets/HOME/logout.svg" alt="" /></span> تسجيل
          الخروج</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  methods: {
    logOut() {
      this.$router.push({ name: "about" });
    },
  },
};
</script>

<style>
.font {
  color: #322a7d;
  font-weight: 900;
}
.logo {
  margin-right: 20%;
}
.naavbar {
  background-color: rgb(255, 255, 255);
  text-decoration: none;
}
ul li {
  list-style: none;
  /* background-color: black; */
  /* border-left: 3px solid red; */
}
/******logout*****/
.loguot {
  margin-top: 200px;
}
.router-link-exact-active {
  color: rgb(29, 29, 146);
  font-size: 20px;
}
/* a.router-link-exact-active a,
ul a a:hover {
  color: black;
} */
a.router-link-exact-active a,
ul a {
  color: rgb(97, 100, 124);
  /* box-shadow: 2px 2px 0px black; */
  text-decoration: none;
}
</style>
