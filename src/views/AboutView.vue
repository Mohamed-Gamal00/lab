<template>
  <!-- <NavBarCom /> -->

  <div class="login">
    <div class="container-fluid w-auto p-3 vh-100 bg-light">
      <div class="row vh-700">
        <!-- col-8 img -->
        <div class="col-lg-8 m-0 p-0 bg-dark col8">
          <div class="fixed-bottom">
            <span class="text-light">logo</span>
            <h1 class="text-light fw-bold">مرحبا بك في معمل دياب</h1>
            <h6 class="text-white-50 fw-bold mb-5">مرحبا بك في معمل دياب</h6>
          </div>
        </div>
        <!-- col-4 form-->
        <div class="col-lg-4 m-0 p-0 col4bg font align-self-center">
          <div class="row p-0 m-auto formtext">
            <div class="col-12">
              <h1 class="text-center fw-bold">مرحبا بعودتك</h1>
              <p class="text-center fw-bold">قم بتسجيل الدخول اولا</p>
            </div>
            <!-- form -->
            <div class="col-lg-12 d-flex justify-content-center">
              <div clasns="row">
                <div class="col-lg-12">
                  <form @click.prevent>
                    <!-- رقم المستخدم -->
                    <div class="mb-4">
                      <label for="username" class="form-label text-dark mb-0">
                        <FontAwesome icon="user" />رقم المستخدم</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        v-model="state.number"
                      />
                      <span class="erroe-feedbak" v-if="v$.number.$error">{{
                        v$.number.$errors[0].$message
                      }}</span>
                    </div>
                    <!-- كلمة المرور -->
                    <div class="mb-4">
                      <label for="password" class="form-label text-dark mb-0"
                        ><FontAwesome icon="lock" /> كلمة المرور</label
                      >
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        v-model="state.password"
                      />
                      <span class="erroe-feedbak" v-if="v$.password.$error">{{
                        v$.password.$errors[0].$message
                      }}</span>
                    </div>
                    <!-- تسجيل الدخول -->
                    <div class="d-grid">
                      <button
                        type="submit"
                        @click="userlogin()"
                        class="btncolor"
                      >
                        تسجيل الدخول
                      </button>
                      <span class="text-dark text-center">
                        {{ UsernotFoundError }}
                      </span>
                    </div>
                  </form>
                </div>
                <div class="col-lg-12 footertext">
                  <span class="text-center fw-bold">
                    <b>تم الانشاء والتطوير بواسطة SIGMA</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import NavBarCom from "@/components/header/NavBar.vue";
import axios from "axios";
import useVlidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  name: "AboutView",
  components: {
    // NavBarCom,
  },
  //composition Api
  setup() {
    //data
    const state = reactive({
      number: "",
      password: "",
    });
    //validations
    const rules = computed(() => {
      return {
        number: { required },
        password: { required },
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
      UsernotFoundError: "",
    };
  },
  methods: {
    async userlogin() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated Succesfuly");
        let result = await axios.post("http://192.168.1.63:8000/api/login", {
          number: this.state.number,
          password: this.state.password,
        });
        console.log(result);
        if (result.status == 200 && result.data.success == true) {
          console.log("loged in");
          this.$router.push({ name: "dashbord" });
          // console.log(result.data.user.token);
          localStorage.setItem(
            "user-token",
            JSON.stringify(result.data.user.token)
          );
          // this.$router.push({ name: "members" });
        } else {
          this.UsernotFoundError = "تسجيل دخول خاطئ";
          console.log("user not found");
        }
      } else {
        console.log("form validation Faild");
      }
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Cairo:wght@200;300;400;500;600;700;800&family=Readex+Pro:wght@200;300;400;500&display=swap");
* {
  direction: rtl;
  font-family: "Almarai", sans-serif;
  font-weight: bolder;
}
.login {
  overflow-y: hidden;
}
.col8 {
  background-image: url("../assets/lab_img/Image.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
.fixed-bottom {
  position: relative;
  top: 65%;
  left: 0;
  right: 13%;
  bottom: 0;
}
.vh-700 {
  height: 100%;
}
.vh-700 img {
  width: 100%;
  height: 700px;
}
.font {
  color: #322a7d;
  font-weight: 700;
}
.btncolor {
  background-color: #322a7d;
  height: 35px;
  border: #322a7d solid 1px;
  border-radius: 10px;
  color: white;
}
/* .formtext {
  position: relative;
  bottom: -15%;
} */
.col4bg {
  background-color: #f5f6fa;
}
.footertext {
  /* margin-top: 45%; */
  position: relative;
  top: 60%;
  font-size: 15px;
}
@media only screen and (max-width: 600px) {
  .col8 {
    display: none;
  }
}
.erroe-feedbak {
  color: red;
  font-size: 0.85em;
}
</style>
