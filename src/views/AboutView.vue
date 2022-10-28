<template>
  <!-- <NavBarCom /> -->

  <div class="about">
    <div class="container-fluid vh-700">
      <div class="row vh-700">
        <!-- col-8 -->
        <div class="col-lg-8 m-0 p-0 bg-dark col8">
          <!-- <div>
            <img src="../assets/lab_img/Image.png" class="img-fluid" alt="" />
          </div> -->
          <div class="fixed-bottom">
            <span class="text-light">logo</span>
            <h1 class="text-light fw-bold">مرحبا بك في معمل دياب</h1>
            <h6 class="text-white-50 fw-bold mb-5">مرحبا بك في معمل دياب</h6>
          </div>
        </div>
        <!-- col-4 -->
        <div class="col-lg-4 m-0 p-0 col4bg font">
          <div class="row m-0 p-0 m-auto formtext">
            <div class="col-12">
              <h1 class="text-center fw-bold">مرحبا بعودتك</h1>
              <p class="text-center fw-bold">قم بتسجيل الدخول اولا</p>
            </div>
            <!-- form -->
            <div
              class="col-lg-12 m-0 mt-3 p-0 text-light d-flex justify-content-center"
            >
              <div clasns="row">
                <div class="col-lg-12">
                  <form @click.prevent>
                    <div class="mb-4">
                      <label for="username" class="form-label text-dark mb-0">
                        <FontAwesome icon="user" />اسم المستخدم</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        v-model="state.numbers"
                      />
                      <span class="erroe-feedbak" v-if="v$.numbers.$error">{{
                        v$.numbers.$errors[0].$message
                      }}</span>
                    </div>
                    <div class="mb-4">
                      <label for="password" class="form-label text-dark mb-0"
                        ><FontAwesome icon="lock" /> كلمة المرور</label
                      >
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        v-model="state.pass"
                      />
                      <span class="erroe-feedbak" v-if="v$.pass.$error">{{
                        v$.pass.$errors[0].$message
                      }}</span>
                    </div>
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
              </div>
            </div>
            <span class="text-center align-bottom footertext fw-bold"
              ><b>تم الانشاء والتطوير بواسطة SIGMA</b></span
            >
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
      numbers: "",
      pass: "",
    });
    //validations
    const rules = computed(() => {
      return {
        numbers: { required },
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
      UsernotFoundError: "",
    };
  },
  methods: {
    async userlogin() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated Succesfuly");
        let result = await axios.get(
          `http://localhost:3000/forms?numbers=${this.state.numbers}&pass=${this.state.pass}`
        );
        console.log(result);
        if (result.status == 200 && result.data.length > 0) {
          console.log("loged in");
          localStorage.setItem("user-data", JSON.stringify(result.data[0]));
          this.$router.push({ name: "dashbord" });
          // console.log("loged in");
          // this.$router.push({ name: "home" });
        } else {
          this.UsernotFoundError = `تسجيل دخول خاطئ`;
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
  height: 730px;
}
.vh-700 img {
  width: 100%;
  height: 730px;
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
.formtext {
  position: relative;
  bottom: -15%;
}
.col4bg {
  background-color: #f5f6fa;
}
.footertext {
  margin-top: 40%;
  font-size: 15px;
}
@media only screen and (max-width: 600px) {
  .col8 {
    display: none;
  }
}
</style>
