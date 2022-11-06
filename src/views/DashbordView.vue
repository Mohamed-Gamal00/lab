<template>
  <DashbprdCom />
</template>

<script>
import DashbprdCom from "@/components/dashboard/DashbprdCom.vue";
export default {
  name: "DashbordView",
  components: { DashbprdCom },
  mounted() {
    let user = localStorage.getItem("user-token");
    if (!user) {
      this.$router.push({ name: "about" });
    } else {
      // this.userId = JSON.parse(user).id;
      // console.log("else welcome dashboard");
    }
  },
};
</script>

<style></style>
