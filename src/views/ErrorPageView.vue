<template>
  <div>
    <img
      src="../assets/errorpage.png"
      class="rounded mx-auto d-block h-400"
      alt=""
    />
  </div>
  <div class="text-center">
    <router-link :to="{ name: 'home' }">
      <button class="btn btn-info">back to home page</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ErrorPageView",
};
</script>

<style>
.h-400 {
  height: 400px;
}
</style>
