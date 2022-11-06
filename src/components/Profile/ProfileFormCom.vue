<!-- <template>
  <div class="container">
    <NavBarCom />
    <form @click.prevent>
      <div class="row g-3 align-items-center">
        <div class="col-auto d-block mx-auto m-3">
          <h1>Update Your Profile</h1>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto d-block mx-auto m-3">
          <input
            type="text"
            disabled
            class="form-control"
            placeholder="enter your name"
            v-model="name"
          />
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto d-block mx-auto m-3">
          <input
            type="text"
            disabled
            class="form-control"
            placeholder="enter your email"
            v-model="email"
          />
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto d-block mx-auto m-3">
          <input
            type="password"
            disabled
            class="form-control"
            placeholder="enter your password"
            v-model="pass"
          />
        </div>
      </div>
      <br />
      <div class="row g-3 align-items-center">
        <div class="col-auto d-block mx-auto">
          <button
            type="submit"
            @click="UpdateProfile()"
            class="btn btn-primary"
          >
            Update Profile Now
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import NavBarCom from "@/components/header/NavBar.vue";
export default {
  name: "ProfileFormCom",
  components: { NavBarCom },
  data() {
    return {
      name: "",
      email: "",
      pass: "",
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.name = JSON.parse(user).name;
      this.email = JSON.parse(user).email;
      this.pass = JSON.parse(user).pass;
    } else {
      this.$router.push({ name: "Signup" });
    }
  },
  methods: {
    UpdateProfile() {
      this.$router.push({ name: "UpdateProfile" });
    },
  },
};
</script>

<style></style> -->
