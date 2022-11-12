<!-- <template>
  <h1 class="text-center fw-bold">Es6View</h1>
</template>

<script>
export default {
  name: "Es6View",
};
// const SETTING = {
//   name: "mohamed",
//   age: 36,
// };
// SETTING.name = "sayed";

// console.log(SETTING);
// let myarray = [1, 2, 3, 4, 2, 5, 6, 7, 2, 3];
// let myset = new Set(myarray);
// console.log(myset);
// let mydate = new Date();
// console.log(mydate);
</script>

<style></style> -->
<template>
  <div class="container mt-5">
    <div class="mt-2 textcolor">
      <span>
        <span><FontAwesome icon="user" class="mr-3" /></span>
        <span class="p-3 textcolor">
          <h5 class="fw-bold d-inline">الاعضاء</h5>
        </span>
      </span>
      <span class="float-start">
        <!-- Button trigger modal1 -->
        <button
          type="button"
          class="btn btn-primary"
          style="background-color: #322a7d"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          اضافة عضو
          <span
            ><FontAwesome style="color: orange" icon="user-plus" class="mr-3"
          /></span>
        </button>

        <!-- Button trigger modal2 -->
        <!-- Modal2 -->
      </span>
    </div>
    <div>
      <!-- content -->
      <!-- <div v-if="users.length > 0"> -->
      <div v-if="users.length > 0">
        <span>list of members ({{ users.length }})</span>
        <div
          v-for="user in users"
          :key="user"
          class="row d-flex justify-content-between mt-4 p-2 textcolor fw-bold"
          style="border-radius: 10px; background-color: white"
        >
          <div class="col-5">
            <div class="row d-flex align-items-center">
              <!-- name -->
              <div class="col-6">
                <span><FontAwesome icon="user" /></span>
                <span class="m-3">{{ user.name }}</span>
              </div>
              <!-- number -->
              <div class="col-5">
                <span
                  ><button
                    type="button"
                    class="btn fw-bold"
                    style="background-color: #84e0be"
                  >
                    <span><FontAwesome class="btn p-1" icon="phone" /></span
                    >{{ user.number }}
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div class="col-5">
            <div class="row d-flex align-items-center">
              <div class="col-8 d-flex justify-content-center">
                <span class="d-block"
                  ><span class="m-3 text-secondary">تاريخ الاضافة </span>
                  {{ user.created_at }}
                </span>
              </div>
              <div class="col-4">
                <span class="d-block">
                  <!-- خيارات -->
                  <div class="dropdown">
                    <a
                      class="btn btn-secondary dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style="background-color: #322a7d; color: white"
                    >
                      خيارات
                    </a>

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <button
                          @click="editUser(user)"
                          type="button"
                          class="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          تعديل
                        </button>
                      </li>
                      <li>
                        <a
                          @click="deleteUser(user.id)"
                          class="dropdown-item"
                          href="#"
                          >حذف</a
                        >
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <!-- Modal1 -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5
                    class="modal-title"
                    id="exampleModalLabel"
                    v-if="this.edit == false"
                  >
                    اضافة
                  </h5>
                  <h5
                    class="modal-title"
                    id="exampleModalLabel"
                    v-if="this.edit == true"
                  >
                    تعديل
                  </h5>
                  <button
                    type="button"
                    class="btn-close m-0"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="row g-3 align-items-center">
                      <div class="col-auto d-block mx-auto m-3">
                        <!-- <h1>Sign Up</h1> -->
                        <input
                          type="text"
                          class="form-control"
                          placeholder="اسم العضو"
                          v-model="state.name"
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
                          placeholder="رقم الهاتف"
                          v-model="state.number"
                        />
                        <span class="erroe-feedbak" v-if="v$.number.$error">{{
                          v$.number.$errors[0].$message
                        }}</span>
                      </div>
                    </div>
                    <!-- password -->
                    <!-- كلمة المرور -->
                    <div class="row g-3 align-items-center">
                      <div class="col-auto d-block mx-auto m-3">
                        <div class="">
                          <input
                            type="password"
                            class="form-control"
                            placeholder="كلمة المرور"
                            v-model="state.password"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- تأكيد كلمة المرور -->
                    <div class="row g-3 align-items-center">
                      <div class="col-auto d-block mx-auto m-3">
                        <div class="mb">
                          <input
                            type="password"
                            class="form-control"
                            placeholder=" تأكيد كلمة المرور"
                            v-model="state.confirm_password"
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <!-- successMessege ErrorMessege -->
                    <div>
                      <div class="row g-3 align-items-center">
                        <div
                          class="col-auto d-block mx-auto m-3 alert alert-success"
                          v-if="successMessege.length > 0"
                        >
                          {{ successMessege }}
                        </div>
                        <div
                          class="col-auto d-block mx-auto m-3 alert alert-danger"
                          v-if="errorMessege.length > 0"
                        >
                          {{ errorMessege }}
                        </div>
                      </div>
                    </div>
                    <br />
                    <!-- check box -->
                    <div class="row g-3 align-items-center">
                      <div class="col-auto d-block mx-auto m-3">
                        نوع العضوية
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            value="1"
                            :checked="state.userType == 1"
                            v-model="state.userType"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            مسؤول
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            value="2"
                            :checked="state.userType == 2"
                            v-model="state.userType"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            مستخدم
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    إغلاق
                  </button>
                  <button
                    v-if="this.edit == false"
                    type="button"
                    @click="addmember()"
                    class="btn btn-primary"
                  >
                    اضف الان
                  </button>
                  <button
                    v-if="this.edit == true"
                    type="button"
                    @click="addmember()"
                    class="btn btn-primary"
                  >
                    تعديل
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="alert alert-warning mt-4 text-center" role="alert">
        no user added yet
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
//composition api
import { reactive, computed } from "vue";
import $ from "jquery";
$(".modal-backdrop").hide();
export default {
  name: "MemberCom",
  setup() {
    const state = reactive({
      name: "",
      number: "",
      password: "",
      confirm_password: "",
      userType: "",
      user_id: "",
      edit: false,
    });
    const rules = computed(() => {
      return {
        name: { required, minLength: minLength(5) },
        number: { required, minLength: minLength(5) },
        password: { required },
        confirm_password: { required },
        userType: { required },
      };
    });
    const v$ = useVuelidate(rules, state);
    return {
      state,
      v$,
    };
  },
  data() {
    return {
      // userId: "",
      successMessege: "",
      errorMessege: "",
      users: [],
      user: {
        id: "",
        name: "",
        number: "",
        password: "",
        confirm_password: "",
        userType: "",
      },
      user_id: "",
      edit: false,
    };
  },
  async mounted() {
    // let user = localStorage.getItem("user-token");
    // if (!user) {
    //   this.$router.push({ name: "about" });
    // } else {
    //   this.userId = JSON.parse(user).id;
    // }
    let result = await axios.get(
      // `http://localhost:3000/members?userId=${this.userId}`
      `https://e-real.almona.host/lab/public/api/users`
    );
    if (result.status == 200) {
      console.log(result.data);
      this.users = result.data.users;
    }
  },
  methods: {
    removeoverlay() {
      $(".modal-backdrop").hide();
    },
    async loadmembers() {
      let result = await axios.get(
        // `http://localhost:3000/members?userId=${this.userId}`
        `https://e-real.almona.host/lab/public/api/users`
      );
      if (result.status == 200) {
        console.log(result.data);
        this.users = result.data.users;
      }
    },
    async addmember() {
      if (this.edit == false) {
        // Add
        this.v$.$validate(); //active my validations
        /* validations */
        if (!this.v$.$error) {
          console.log("validated");
          let addresult = await axios
            .post(`https://e-real.almona.host/lab/public/api/user/add`, {
              name: this.state.name,
              number: this.state.number,
              password: this.state.password,
              confirm_password: this.state.confirm_password,
              userType: this.state.userType,
              userId: this.userId,
            })
            .then(
              ((this.edit = true),
              (this.user_id = ""),
              (this.state.name = ""),
              (this.state.number = ""),
              (this.state.password = ""),
              (this.state.confirm_password = ""),
              (this.state.userType = ""))
            );
          if (addresult.data.success == true) {
            //show success messge
            this.removeoverlay();
            this.loadmembers();
            this.errorMessege = "";
            this.successMessege = "تم الاضافة بنجاح";
            // this.$router.push({ name: "doctors" });
            // setTimeout(() => {
            //   this.successMessege = "";
            //   this.errorMessege = "";
            //   this.state.name = "";
            //   this.state.number = "";
            //   this.state.password = "";
            //   this.state.confirm_password = "";
            //   this.state.userType = "";
            //   this.v$.number.$errors[0].$message = "";
            //   this.v$.name.$errors[0].$message = "";
            //   // this.$router.go(this.$router.currentRoute);
            // }, 1000);
          } else {
            this.successMessege = "";
            this.errorMessege = "خطاء : refresh page";
          }
        } else {
          console.log("not validated");
          this.successMessege = "";
          this.errorMessege = "املاء حقول الادخال بطريقة صحيحة";
        }
      } else {
        // Edit
        if (!this.v$.$error) {
          console.log("validate");
          let editresult = await axios
            .post(
              `https://e-real.almona.host/lab/public/api/user/edit/${this.user_id}`,
              {
                name: this.state.name,
                number: this.state.number,
                password: this.state.password,
                confirm_password: this.state.confirm_password,
                userType: this.state.userType,
              }
            )
            /* edit */
            .then(
              ((this.edit = false),
              (this.user_id = ""),
              (this.state.name = ""),
              (this.state.number = ""),
              (this.state.password = ""),
              (this.state.confirm_password = ""),
              (this.state.userType = ""))
            );
          if (editresult.status == 200 && editresult.data.success == true) {
            console.log("wellcome");
            this.loadmembers();
            this.$router.go(this.$router.currentRoute);
          }
        } else {
          console.log("not validate");
        }
      }
    },
    async deleteUser(id) {
      console.log("delete successfuly");
      let result = await axios.post(
        `https://e-real.almona.host/lab/public/api/user/del/${id}`,
        {}
      );
      if (result.data.success == true) {
        console.log(" user deleted succesfuly");
        this.loadmembers();
        // this.$router.go(this.$router.currentRoute);

        //show success messge
        // this.errorMessege = "";
        // this.successMessege = "تم الاضافة بنجاح";
      } else {
        this.successMessege = "";
        this.errorMessege = "خطاء : refresh page";
      }
    },
    async editUser(user) {
      // console.log("delete fun");
      // this.user_id = user.id;
      this.edit = true;
      this.user_id = user.id;
      this.state.name = user.name;
      this.state.number = user.number;
      this.state.userType = user.type;
      console.log("done ya 3mana!");
    },
  },
};
</script>

<style>
.textcolor {
  color: #322a7d;
}
.modal-backdrop {
  display: none;
}
</style>
