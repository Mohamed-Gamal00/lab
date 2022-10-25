<!-- eslint-disable vue/no-deprecated-router-link-tag-prop -->
<template>
  <div>
    <ul>
      <router-link
        tag="li"
        :to="{ name: 'home', params: { pagetitle: 'Home Page' } }"
        exact
      >
        <a>Home</a>
      </router-link>
      <router-link tag="li" :to="{ name: 'about' }" exact>
        <a>About</a>
      </router-link>
      <a href="#" @click="LogMeOut()">LogOut</a>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBarCom",
  methods: {
    LogMeOut() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style lang="scss" scoped>
$fontcolor: darkcyan;
$navcolor: #525a5a;
ul {
  display: flex;
  justify-content: center;
  list-style: none;
  // margin-bottom: 50px;
  a {
    text-decoration: none;
    font-weight: bold;
    color: $fontcolor;
    padding: 10px;
  }
}
a.router-link-exact-active a,
ul a a:hover {
  color: $navcolor;
  box-shadow: 2px 2px 0px $navcolor;
}
</style>
