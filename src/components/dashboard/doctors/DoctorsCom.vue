<template>
  <div class="container mt-5">
    <!-- header -->
    <div class="mt-2 fw-bold fs-4">
      <span
        ><span><FontAwesome icon="user-doctor" />الأطباء</span>
      </span>
      <span class="float-start">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          style="background-color: #322a7d"
          data-bs-target="#exampleModal"
        >
          اضافة طبيب
          <span><FontAwesome style="color: orange" icon="user-plus" /></span>
        </button>
      </span>
    </div>
    <!-- doctor details -->
    <div class="doctorsdetails">
      <div v-if="doctors.length > 0">
        <span>list of doctors ({{ doctors.length }})</span>
      </div>
      <div class="mt-1 p-1" v-for="doctor in doctors" :key="doctor">
        <!-- Modal of add-->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="false"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="border: 2px solid black">
              <!-- header -->
              <div class="modal-header d-inline">
                <h5
                  class="modal-title fw-bold text-center"
                  style="color: #322a7d"
                  id="exampleModalLabel"
                >
                  اضافة دكتور
                </h5>
                <p class="text-center">اضف طبيب جديد الي قائمة الاطباء</p>
              </div>
              <!-- body -->
              <div class="modal-body">
                <form>
                  <!-- <h1> اسم لطبيب </h1> -->
                  <div class="row g-3 align-items-center">
                    <div class="col-auto d-block mx-auto m-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="اسم لطبيب"
                        v-model="name"
                      />
                      <span class="erroe-feedbak" v-if="v$.name.$error">{{
                        v$.name.$errors[0].$message
                      }}</span>
                    </div>
                  </div>
                  <!-- رقم الهاتف -->
                  <div class="row g-3 align-items-center">
                    <div class="col-auto d-block mx-auto m-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="رقم الهاتف"
                        v-model="number"
                      />
                      <span class="erroe-feedbak" v-if="v$.number.$error">{{
                        v$.number.$errors[0].$message
                      }}</span>
                    </div>
                  </div>
                  <!-- <h1> عنوان لطبيب </h1> -->
                  <div class="row g-3 align-items-center">
                    <div class="col-auto d-block mx-auto m-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="عنوان لطبيب"
                        v-model="address"
                      />
                      <span class="erroe-feedbak" v-if="v$.address.$error">{{
                        v$.address.$errors[0].$message
                      }}</span>
                    </div>
                  </div>
                  <br />
                </form>
              </div>
              <!-- footer -->
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  إغلاق
                </button>
                <button
                  @click="AddDoctor()"
                  type="button"
                  class="btn btn-primary"
                  style="background-color: #322a7d"
                >
                  اضف الان
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- content of page & get -->
        <div
          class="row p-2"
          style="
            border: 1px solid transparent;
            border-radius: 20px;
            background-color: white;
          "
        >
          <!-- 1 -->
          <div class="col-6 mt-2">
            <div class="row">
              <!-- img -->
              <div class="col-2">
                <div class="text-end" width="80" height="80">
                  <img
                    :src="doctor.image"
                    width="80"
                    height="80"
                    class="rounded-circle"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="mt-2">
                  <h4 class="mb-0 text-black fw-bold">
                    <strong>د/ {{ doctor.name }}</strong>
                  </h4>
                  <p class="text-secondary address mt-2">
                    <span><FontAwesome icon="location-dot" /></span>
                    {{ doctor.address }}
                  </p>
                </div>
              </div>
              <div class="col-4">
                <span
                  ><button
                    type="button"
                    class="btn fw-bold p-1"
                    style="background-color: #84e0be"
                  >
                    <span><FontAwesome class="btn p-1" icon="phone" /></span
                    >{{ doctor.number }}
                  </button>
                </span>
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="col-6 mt-2">
            <div class="row d-flex justify-content-center">
              <div class="col-4 text-start">
                <span class="fw-bold">
                  {{ moment(doctor.created_at).calendar() }}</span
                >
                <span class="d-block">
                  <div class="dropdown">
                    <button
                      class="btn mt-4 btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style="background-color: #322a7d"
                    >
                      خيارات
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <!-- Modal of edit button -->
                        <button
                          @click="EditDoctor(doctor)"
                          class="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#edit"
                        >
                          تعديل
                        </button>
                      </li>
                      <li>
                        <button
                          @click="DeleteDoctor(doctor.id)"
                          class="dropdown-item"
                        >
                          حذف
                        </button>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
              <div
                class="col-5 text-center"
                style="border-right: 1px solid #6c757d"
              >
                <span> الطلبات المطلوبة</span>
                <span class="d-block">
                  <h5 class="fw-bold mt-2">
                    {{ doctor.orders.length }}
                  </h5></span
                >
              </div>
            </div>
          </div>
          <!-- Modal of edit-->
          <div
            class="modal fade"
            id="edit"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">تعديل</h1>
                  <button
                    type="button"
                    class="btn-close m-0"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <!-- <h1> اسم لطبيب </h1> -->
                    <div class="row g-3 align-items-center">
                      <div class="col-auto d-block mx-auto m-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="اسم لطبيب"
                          v-model="name"
                        />
                        <span class="erroe-feedbak" v-if="v$.name.$error">{{
                          v$.name.$errors[0].$message
                        }}</span>
                      </div>
                    </div>
                    <!-- رقم الهاتف -->
                    <div class="row g-3 align-items-center">
                      <div class="col-auto d-block mx-auto m-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="رقم الهاتف"
                          v-model="number"
                        />
                        <span class="erroe-feedbak" v-if="v$.number.$error">{{
                          v$.number.$errors[0].$message
                        }}</span>
                      </div>
                    </div>
                    <!-- <h1> عنوان لطبيب </h1> -->
                    <div class="row g-3 align-items-center">
                      <div class="col-auto d-block mx-auto m-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="عنوان لطبيب"
                          v-model="address"
                        />
                        <span class="erroe-feedbak" v-if="v$.address.$error">{{
                          v$.address.$errors[0].$message
                        }}</span>
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
                    الغاء
                  </button>
                  <button
                    @click="UpdateDoctor()"
                    type="button"
                    class="btn btn-primary"
                  >
                    تعديل
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- tables -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var moment = require("moment");
moment.locale("ar_SA");
import axios from "axios";
// import $ from "jquery";
// $(".modal-backdrop").css("display", "none");
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
export default {
  name: "DoctorsCom",
  data() {
    return {
      moment: moment,
      doctors: [],
      v$: useVuelidate(),
      name: "",
      number: "",
      address: "",
      doctor: {
        id: "",
        name: "",
        number: "",
        address: "",
      },
      user_id: "",
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(5) },
      number: { required, minLength: minLength(5) },
      address: { required, minLength: minLength(5) },
    };
  },
  /* get */
  async mounted() {
    let result = await axios.get(
      `https://e-real.almona.host/lab/public/api/doctors`
    );
    if (result.data.success == true) {
      console.log("data is exist");
      console.log("doctors result is", result);
      console.log(result.data);
      this.doctors = result.data.doctors;
      console.log("data length is", result.data.doctors.length);
    } else {
      console.log("faild data");
    }
  },
  ////////////////////////////////////////////methods post
  // delete overlay loaddoctors
  methods: {
    async loaddoctors() {
      let result = await axios.get(
        `https://e-real.almona.host/lab/public/api/doctors`
      );
      if (result.data.success == true) {
        console.log(result.data);
        this.doctors = result.data.doctors;
      }
    },
    async AddDoctor() {
      console.log("add doctor function");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated successfuly");
        let result = await axios.post(
          `https://e-real.almona.host/lab/public/api/add_doctor`,
          {
            name: this.name,
            number: this.number,
            address: this.address,
          }
        );
        setTimeout(() => {
          this.name = "";
          this.number = "";
          this.address = "";
          this.v$.number.$errors[0].$message = "";
          this.v$.name.$errors[0].$message = "";
          this.v$.address.$errors[0].$message = "";
        }, 1000);
        console.log(result);
        if (result.data.success == true) {
          console.log("data true");
          this.loaddoctors();
        } else {
          console.log("data false");
        }
      } else {
        console.log("form validated faild");
      }
    },
    async DeleteDoctor(id) {
      console.log("delete doctor");
      let result = await axios.post(
        `https://e-real.almona.host/lab/public/api/del_doctor/${id}`,
        {}
      );
      if (result.data.success == true) {
        console.log(" user deleted succesfuly");
        this.loaddoctors();
      } else {
        console.log("faild to delete user");
      }
    },
    async EditDoctor(doctor) {
      this.user_id = doctor.id;
      this.name = doctor.name;
      this.number = doctor.number;
      this.address = doctor.address;
      console.log("EditDoctor call success");
      console.log("edit doctor");
      if (!this.v$.$error) {
        console.log("validated");
        let editresult = await axios.post(
          `https://e-real.almona.host/lab/public/api/user/edit/${this.user_id}`,
          {
            name: this.name,
            number: this.number,
            address: this.address,
          }
        );
        console.log(editresult);
      } else {
        console.log("not validate");
      }
    },
    async UpdateDoctor() {
      console.log("update doctor function");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated successfuly");
        let result = await axios.post(
          `https://e-real.almona.host/lab/public/api/edit_doctor/${this.user_id}`,
          {
            name: this.name,
            number: this.number,
            address: this.address,
          }
        );
        setTimeout(() => {
          this.name = "";
          this.number = "";
          this.address = "";
          this.v$.number.$errors[0].$message = "";
          this.v$.name.$errors[0].$message = "";
          this.v$.address.$errors[0].$message = "";
        }, 1000);
        console.log(result);
        if (result.data.success == true) {
          console.log("data updated succesfuly");
          this.loaddoctors();
        } else {
          console.log("data false");
        }
      } else {
        console.log("form validated faild");
      }
    },
  },
};
</script>

<style>
.doctorsdetails {
  margin-top: 20px;
  padding: 10px;
  /* border: 1px solid rgb(214, 55, 55); */
  border-radius: 20px;
}
.erroe-feedbak {
  color: red;
}
</style>
