<template>
  <div class="container-fluid">
    <div class="row">
      <!-- sideBar -->
      <div class="col-lg-2">
        <SideBar />
      </div>
      <!-- Doctors -->
      <div class="col-lg-10" style="background-color: #f5f6fa">summery</div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/dashboard/SideBar.vue";
export default {
  name: "DoctorsView",
  components: { SideBar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Cairo:wght@200;300;400;500;600;700;800&family=Readex+Pro:wght@200;300;400;500&display=swap");
</style>
