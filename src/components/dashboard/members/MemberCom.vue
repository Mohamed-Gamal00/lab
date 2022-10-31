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
        <!-- Button trigger modal -->
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
        <!-- Modal -->
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
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form @click.prevent>
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
                        v-model="state.phone"
                      />
                      <span class="erroe-feedbak" v-if="v$.phone.$error">{{
                        v$.phone.$errors[0].$message
                      }}</span>
                    </div>
                  </div>
                  <br />
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
                  type="button"
                  @click="addmember()"
                  class="btn btn-primary"
                >
                  اضف الان
                </button>
              </div>
            </div>
          </div>
        </div>
      </span>
    </div>
    <div>
      <!-- content -->
      <div v-if="listofmembers.length > 0">
        <span>list of members ({{ listofmembers.length }})</span>
        <div
          v-for="(member, i) in listofmembers"
          :key="i"
          class="row d-flex justify-content-between mt-4 p-2 textcolor fw-bold"
          style="border-radius: 10px; background-color: white"
        >
          <div class="col-5">
            <div class="row d-flex align-items-center">
              <!-- name -->
              <div class="col-5">
                <span><FontAwesome icon="user" /></span>
                <span class="m-3">{{ member.name }}</span>
              </div>
              <!-- number -->
              <div class="col-7">
                <span
                  ><button
                    type="button"
                    class="btn fw-bold"
                    style="background-color: #84e0be"
                  >
                    <span><FontAwesome class="btn p-1" icon="phone" /></span
                    >{{ member.phone }}
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div class="col-5">
            <div class="row d-flex align-items-center">
              <div class="col-8 d-flex justify-content-center">
                <span class="d-block"
                  ><span class="m-3 text-secondary">تاريخ الاضافة </span> اليوم
                  10:45 صباحا</span
                >
              </div>
              <div class="col-4">
                <span class="d-block">
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
                      <li><a class="dropdown-item" href="#">تعديل</a></li>
                      <li><a class="dropdown-item" href="#">حذف</a></li>
                    </ul>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="alert alert-warning mt-4 text-center" role="alert">
        no location added yet
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
export default {
  name: "MemberCom",
  setup() {
    const state = reactive({
      name: "",
      phone: "",
    });
    const rules = computed(() => {
      return {
        name: { required, minLength: minLength(10) },
        phone: { required, minLength: minLength(11) },
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
      userId: "",
      successMessege: "",
      errorMessege: "",
      listofmembers: [],
    };
  },
  async mounted() {
    let user = localStorage.getItem("user-data");
    if (!user) {
      this.$router.push({ name: "about" });
    } else {
      this.userId = JSON.parse(user).id;
    }
    let result = await axios.get(
      `http://localhost:3000/members?userId=${this.userId}`
    );
    if (result.status == 200 && result.data.length > 0) {
      console.log(result.data);
      this.listofmembers = result.data;
    }
  },
  methods: {
    async addmember() {
      this.v$.$validate(); //active my validations
      if (!this.v$.$error) {
        console.log("validated");
        let result = await axios.post(`http://localhost:3000/members`, {
          name: this.state.name,
          phone: this.state.phone,
          userId: this.userId,
        });
        if (result.status == 201) {
          //show success messge
          this.errorMessege = "";
          this.successMessege = "تم الاضافة بنجاح";
          this.$router.push({ name: "members" });
          setTimeout(() => {
            this.successMessege = "";
            this.errorMessege = "";
            this.state.name = "";
            this.state.phone = "";
            this.v$.phone.$errors[0].$message = "";
            this.v$.name.$errors[0].$message = "";
          }, 1000);
        } else {
          this.successMessege = "";
          this.errorMessege = "خطاء : refresh page";
        }
      } else {
        console.log("not validated");
        this.successMessege = "";
        this.errorMessege = "املاء حقول الادخال بطريقة صحيحة";
      }
    },
  },
};
</script>

<style>
.textcolor {
  color: #322a7d;
}
</style>
