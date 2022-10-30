<template>
  <!-- <p>DashbprdCom solid icon <FontAwesome icon="user" /></p>
  <p>DashbprdCom Regular icon <FontAwesome :icon="['far', 'user']" /></p>
  <p>DashbprdCom brand icon <FontAwesome :icon="['fab', 'facebook']" /></p> -->
  <div class="container-fluid">
    <div class="row">
      <!-- sideBar -->
      <div class="col-lg-2">
        <SideBar />
      </div>
      <!-- contentsection -->
      <div class="col-lg-7" style="background-color: #f5f6fa">
        <ContentSection />
      </div>
      <!-- sidecontent -->
      <div class="col-lg-3" style="background-color: #f5f6fa">
        <SideContent />
      </div>
    </div>
  </div>
</template>

<script>
import ContentSection from "@/components/dashboard/ContentSection.vue";
import SideBar from "@/components/dashboard/SideBar.vue";
import SideContent from "@/components/dashboard/SideContent.vue";
export default {
  name: "DashbprdCom",
  components: { ContentSection, SideBar, SideContent },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Cairo:wght@200;300;400;500;600;700;800&family=Readex+Pro:wght@200;300;400;500&display=swap");
* {
  direction: rtl;
  font-family: "Almarai", sans-serif;
}
</style>
