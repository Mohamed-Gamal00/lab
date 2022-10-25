<template>
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
            class="form-control"
            placeholder="enter your name"
            v-model="name"
          />
          <span class="erroe-feedbak" v-if="v$.name.$error">{{
            v$.name.$errors[0].$message
          }}</span>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto d-block mx-auto m-3">
          <input
            type="text"
            class="form-control"
            placeholder="enter your email"
            v-model="email"
          />
          <span class="erroe-feedbak" v-if="v$.email.$error">{{
            v$.email.$errors[0].$message
          }}</span>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto d-block mx-auto m-3">
          <input
            type="password"
            class="form-control"
            placeholder="enter your password"
            v-model="pass"
          />
          <span class="erroe-feedbak" v-if="v$.pass.$error">{{
            v$.pass.$errors[0].$message
          }}</span>
        </div>
      </div>
      <br />
      <div class="row g-3 align-items-center">
        <div class="col-auto d-block mx-auto">
          <button
            type="submit"
            @click="UpdateProfileNow()"
            class="btn btn-primary"
          >
            Update Profile Now
          </button>
        </div>
        <br />
        <div class="row g-3 align-items-center">
          <div class="col-auto d-block mx-auto m-3 erroe-feedbak">
            {{ UpdateError }}
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import NavBarCom from "@/components/header/NavBar.vue";
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
// import { json } from "body-parser";
export default {
  name: "UpdateProfile",
  components: { NavBarCom },
  data() {
    return {
      v$: useValidate(),
      name: "",
      email: "",
      pass: "",
      userId: "",
      UpdateError: "",
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(10) },
      email: { required, email },
      pass: { required, minLength: minLength(10) },
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.name = JSON.parse(user).name;
      this.email = JSON.parse(user).email;
      this.pass = JSON.parse(user).pass;
      this.userId = JSON.parse(user).id;
    } else {
      this.$router.push({ name: "Signup" });
    }
  },
  methods: {
    async UpdateProfileNow() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("Validated");
        //put
        let result = await axios.put(
          `http://localhost:3000/users/${this.userId}`,
          {
            name: this.name,
            email: this.email,
            pass: this.pass,
          }
        );
        if (result.status == 200) {
          console.log(result);
          console.log("profile is updated succesfuly");
          //save user data in local storage
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "Profile" });
        } else {
          console.warn("profile is not Updated");
          this.UpdateError = "update not found , try again";
        }
      } else {
        this.UpdateError = "update not found , try again";
      }
    },
  },
};
</script>

<style>
.erroe-feedbak {
  color: red;
  font-size: 0.85em;
}
</style>
