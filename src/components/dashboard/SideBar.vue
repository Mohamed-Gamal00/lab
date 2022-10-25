<template>
  <!-- header -->
  <div class="row">
    <div class="mt-5">
      <span class="logo">logo</span>
      <strong><h3 class="fw-bold font text-center">معمل دياب</h3></strong>
    </div>
  </div>
  <!-- navbar -->
  <div class="mt-5 naavbar font">
    <ul>
      <li>
        <span
          ><FontAwesome style="color: #bbc5d5" icon="house-chimney-window"
        /></span>
        <span style="margin-right: 26px">الرئيسية</span>
      </li>
      <li class="mt-4">
        <span
          ><span><img src="@/assets/HOME/graph.svg" alt="" /></span>
        </span>
        <span style="margin-right: 26px">التقارير</span>
      </li>
      <li class="mt-4">
        <span
          ><span><img src="@/assets/HOME/enquiries.svg" alt="" /></span
        ></span>
        <span style="margin-right: 26px">الملخص</span>
      </li>
      <li class="mt-4">
        <span><FontAwesome style="color: #bbc5d5" icon="user-doctor" /></span>
        <span style="margin-right: 26px">الاطباء</span>
      </li>
      <li class="mt-4">
        <span
          ><span><img src="@/assets/HOME/users.svg" alt="" /></span
        ></span>
        <span style="margin-right: 26px">الاعضاء</span>
      </li>
      <li class="mt-4">
        <span><FontAwesome style="color: #bbc5d5" icon="gear" /></span>
        <span style="margin-right: 26px">الاعدادات</span>
      </li>
    </ul>
    <div class="d-flex justify-content-center loguot">
      <div>
        <a href="#" class="text-danger" style="text-decoration: none">
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
}
ul li {
  list-style: none;
}
/******logout*****/
.loguot {
  margin-top: 200px;
}
</style>
