<!-- <template>
  <MemberCom />
</template>

<script>
import MemberCom from "@/components/dashboard/members/MemberCom.vue";
export default {
  name: "MembersView",
  components: {
    MemberCom,
  },
};
</script>

<style></style> -->
<template>
  <div class="container-fluid">
    <div class="row">
      <!-- sideBar -->
      <div class="col-lg-2">
        <SideBar />
      </div>
      <!-- members -->
      <div class="col-lg-10" style="background-color: #f5f6fa">
        <MemberCom />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/dashboard/SideBar.vue";
import MemberCom from "@/components/dashboard/members/MemberCom.vue";
export default {
  name: "DoctorsView",
  components: { SideBar, MemberCom },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Cairo:wght@200;300;400;500;600;700;800&family=Readex+Pro:wght@200;300;400;500&display=swap");
</style>
