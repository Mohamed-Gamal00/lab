<template>
  <div class="container mt-5">
    <div class="mt-2 textcolor">
      <span>
        <span><FontAwesome icon="user" class="mr-3" /></span>
        <span class="p-3 textcolor">
          <h5 class="fw-bold d-inline">التجار</h5>
        </span>
      </span>
      <span class="float-start">
        <!-- Button modal add provider -->
        <button
          @click="addproviderOpen = true"
          type="button"
          class="btn btn-primary"
          style="background-color: #322a7d"
        >
          اضافة تاجر
          <span
            ><FontAwesome style="color: orange" icon="user-plus" class="mr-3"
          /></span>
        </button>
      </span>
    </div>
    <div>
      <!-- content -->
      <!-- <button @click="editProviderOpen = true">open</button> -->
      <!-- ------------- -->
      <div>
        <div
          class="row d-flex justify-content-between mt-4 p-2 textcolor fw-bold"
          style="border-radius: 10px; background-color: white"
          v-for="provider in providers"
          :key="provider"
        >
          <!-- الاسم و الرقم -->
          <div class="col-5">
            <div class="row d-flex align-items-center">
              <!-- name -->
              <div class="col-7">
                <span><FontAwesome icon="user" /></span>
                <span class="m-3">{{ provider.name }}</span>
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
                    >{{ provider.number }}
                  </button>
                </span>
              </div>
            </div>
          </div>
          <!-- التاريخ والتعديل -->
          <div class="col-5">
            <div class="row d-flex align-items-center">
              <div class="col-8 d-flex justify-content-center">
                <span class="d-block"
                  ><span class="m-3 text-secondary">
                    {{ provider.created_at }}
                  </span>
                </span>
              </div>
              <!-- خيارات -->
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
                      <li>
                        <button
                          @click="
                            (editProviderOpen = true), EditProviders(provider)
                          "
                          class="dropdown-item"
                        >
                          تعديل
                        </button>
                      </li>
                      <li>
                        <button
                          @click="DeleteProvider(provider.id)"
                          class="dropdown-item"
                        >
                          حذف
                        </button>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <!-- modal add provider -->
          <div class="root">
            <teleport to="body">
              <div class="modalpopup" v-if="addproviderOpen">
                <div class="text-center">
                  <h1>add provider</h1>
                  <h1>you can add new provider here</h1>
                  <!-- اسم التاجر -->
                  <div class="row g-3 align-items-center">
                    <div class="col-auto d-block mx-auto m-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="اسم التاجر"
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
                  <button @click="AddProvider()">add</button>
                  <button @click="(addproviderOpen = false), ResetProviders()">
                    close
                  </button>
                </div>
              </div>
            </teleport>
          </div>
          <!-- modal edit provider -->
          <div class="root">
            <teleport to="body">
              <div class="modalpopup" v-if="editProviderOpen">
                <div class="text-center">
                  <h1>new popup</h1>
                  <h2>wellcom here every body</h2>
                  <!-- اسم التاجر -->
                  <div class="row g-3 align-items-center">
                    <div class="col-auto d-block mx-auto m-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="اسم التاجر"
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
                  <!--  -->
                  <button @click="UpdateProvider()">edit</button>
                  <button @click="(editProviderOpen = false), ResetProviders()">
                    close
                  </button>
                </div>
              </div>
            </teleport>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
export default {
  name: "ProvidersCom",
  data() {
    return {
      addproviderOpen: false,
      editProviderOpen: false,
      v$: useVuelidate(),
      providers: [],
      name: "",
      number: "",
      provider: {
        id: "",
        name: "",
        number: "",
      },
      user_id: "",
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(5) },
      number: { required, minLength: minLength(5) },
    };
  },
  async mounted() {
    let result = await axios.get(
      `https://e-real.almona.host/lab/public/api/providers`
    );
    if (result.status == 200) {
      console.log(result.data);
      this.providers = result.data.providers;
    }
  },
  methods: {
    async loadproviders() {
      let result = await axios.get(
        `https://e-real.almona.host/lab/public/api/providers`
      );
      if (result.data.success == true) {
        console.log(result.data);
        this.providers = result.data.providers;
      }
    },
    async AddProvider() {
      console.log("add doctor function");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated successfuly");
        let result = await axios.post(
          `https://e-real.almona.host/lab/public/api/add_provider`,
          {
            name: this.name,
            number: this.number,
          }
        );
        setTimeout(() => {
          this.name = "";
          this.number = "";
          // this.v$.number.$errors[0].$message = "";
          // this.v$.name.$errors[0].$message = "";
        });
        console.log(result);
        if (result.data.success == true) {
          console.log("data true user added success");
          this.loadproviders();
        } else {
          console.log("data false");
        }
      } else {
        console.log("form validated faild");
      }
    },
    async DeleteProvider(id) {
      console.log("delete doctor");
      let result = await axios.post(
        `https://e-real.almona.host/lab/public/api/del_provider/${id}`,
        {}
      );
      if (result.data.success == true) {
        console.log(" provider deleted succesfuly");
        this.loadproviders();
      } else {
        console.log("faild to delete provider");
      }
    },
    async EditProviders(provider) {
      this.user_id = provider.id;
      this.name = provider.name;
      this.number = provider.number;
      this.provider.id = provider.id;
      this.provider.name = provider.name;
      this.provider.number = provider.number;
    },
    async ResetProviders() {
      this.user_id = "";
      this.name = "";
      this.number = "";
      this.provider.id = "";
      this.provider.name = "";
      this.provider.number = "";
    },
    async UpdateProvider() {
      console.log("update provider function");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated successfuly");
        let result = await axios.post(
          `https://e-real.almona.host/lab/public/api/edit_provider/${this.user_id}`,
          {
            name: this.name,
            number: this.number,
          }
        );
        setTimeout(() => {
          this.name = "";
          this.number = "";
          this.v$.number.$errors[0].$message = "";
          this.v$.name.$errors[0].$message = "";
        }, 1000);
        console.log(result);
        if (result.data.success == true) {
          console.log("data updated succesfuly");
          this.loadproviders();
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
.textcolor {
  color: #322a7d;
}
.root {
  position: relative;
}

/* .modalpopupadd {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(80, 67, 67, 0.212);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
} */
.modalpopup {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(80, 67, 67, 0.212);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modalpopup > div {
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
}
</style>
