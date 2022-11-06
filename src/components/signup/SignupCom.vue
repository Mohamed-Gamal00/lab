<!-- <template>
  <form @click.prevent>
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto m-3">
        <h1>Sign Up</h1>
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
        <button type="submit" @click="SignUp()" class="btn btn-primary">
          sign up now
        </button>
        &nbsp; &nbsp; &nbsp;
        <button @click="Loginpage()" type="submit" class="btn btn-link">
          login
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  name: "SignUpFormCom",
  data() {
    return {
      v$: useValidate(),
      name: "",
      pass: "",
      email: "",
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(5) },
      pass: { required, minLength: minLength(5) },
      email: { required, email },
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    Loginpage() {
      this.$router.push({ name: "Login" });
    },
    async SignUp() {
      console.log("SignUp(now)");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated Succesfuly");
        let result = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          pass: this.pass,
        });
        if (result.status == 201) {
          console.log("Add new user Succesfuly");
          //save user data in local storage
          localStorage.setItem("user-info", JSON.stringify(result.data));
          console.log(result);
          console.log(JSON.stringify(result.data));
          //redirect to
          this.$router.push({ name: "home" });
        } else {
          console.log("erro on add new user");
        }
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
</style> -->
