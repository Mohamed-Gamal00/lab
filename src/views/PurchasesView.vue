<template>
  <div class="container-fluid">
    <div class="row">
      <!-- sideBar -->
      <div class="col-lg-2">
        <SideBar />
      </div>
      <!--purchases -->
      <div class="col-lg-10" style="background-color: #f5f6fa">
        <PurchasesCom />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/dashboard/SideBar.vue";
import PurchasesCom from "@/components/dashboard/purchases/PurchasesCom.vue";
export default {
  name: "PurchasesView",
  components: { SideBar, PurchasesCom },
  // mounted() {
  //   let user = localStorage.getItem("user-token");
  //   if (!user) {
  //     this.$router.push({ name: "about" });
  //   } else {
  //     // this.userId = JSON.parse(user).id;
  //     console.log("else welcome dashboard");
  //   }
  // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Cairo:wght@200;300;400;500;600;700;800&family=Readex+Pro:wght@200;300;400;500&display=swap");
</style>
