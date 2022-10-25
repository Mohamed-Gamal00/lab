<template>
  <form @click.prevent>
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto m-3">
        <h1>Login</h1>
        <input
          type="text"
          class="form-control"
          placeholder="enter your email"
          v-model="state.email"
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
          v-model="state.pass"
        />
        <span class="erroe-feedbak" v-if="v$.pass.$error">{{
          v$.pass.$errors[0].$message
        }}</span>
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <button type="submit" @click="UserLogin()" class="btn btn-primary">
          login
        </button>
        &nbsp;&nbsp;&nbsp;
        <button type="submit" @click="SignUppage()" class="btn btn-link">
          sign up
        </button>
      </div>
    </div>
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto m-3 erroe-feedbak">
        {{ UserNotFound }}
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import useVlidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  name: "LoginFormCom",
  setup() {
    const state = reactive({
      pass: "",
      email: "",
    });
    const rules = computed(() => {
      return {
        email: { required, email },
        pass: { required },
      };
    });
    const v$ = useVlidate(rules, state);
    return {
      state,
      v$,
    };
  },
  data() {
    return {
      UserNotFound: "",
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    SignUppage() {
      this.$router.push({ name: "Signup" });
    },
    async UserLogin() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated Succesfuly");
        let result = await axios.get(
          `http://localhost:3000/users?email=${this.state.email}&pass=${this.state.pass}`
        );
        if (result.status == 200 && result.data.length > 0) {
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));
          console.log("loged in");
          this.$router.push({ name: "home" });
        } else {
          this.UserNotFound = "user not found";
        }
        console.log(result);
      } else {
        console.log("form validation Faild");
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
