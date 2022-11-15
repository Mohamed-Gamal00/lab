<template>
  <div class="mt-5">
    <div class="mt-2 textcolor">
      <span>
        <span><FontAwesome icon="money-bill" /></span>
        <span class="p-1 textcolor">
          <h5 class="fw-bold d-inline p-1"><strong>المشتريات</strong></h5>
        </span>
      </span>
      <span class="float-start">
        <!-- Button modal add purchases -->
        <button
          @click="add_purchases = true"
          type="button"
          class="btn btn-primary"
          style="background-color: #322a7d"
        >
          إضافة مشتريات
          <span
            ><FontAwesome style="color: orange" icon="money-bill" class="mr-3"
          /></span>
        </button>
      </span>
    </div>
    <hr />
  </div>
  <div>
    <div class="row d-flex justify-content-center">
      <div class="col-8 p-4 m-1 rounded-3">
        <!-- اسم المنتج -->
        <div v-for="purchase in purchases" :key="purchase">
          <div class="p-4 mb-2 rounded-3 shadow bg-white">
            <div class="row">
              <!-- اسم المنتج -->
              <div class="col-3">
                <div class="fw-bold" style="color: #322a92">
                  <span
                    ><h6 class="fw-bold d-inline m-1">
                      <strong>{{ purchase.name }}</strong>
                    </h6></span
                  >
                </div>
              </div>
              <!-- اسم التاجر -->
              <div class="col-3">
                <span>
                  <h6>
                    <strong>{{ purchase.provider }}</strong>
                  </h6>
                </span>
              </div>
              <!-- الكمية x السعر -->
              <div class="col-2">
                {{ purchase.amount }}x{{ purchase.price }}
              </div>
              <!-- السعر الاجمالي -->
              <div class="col-2">
                {{ purchase.total_price }} <small>جنيه</small>
              </div>
              <!-- الخيارات    تعديل & حذف -->
              <div class="col-2">
                <div class="dropdown">
                  <!-- خيارات dropdown-->
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    role="button"
                    style="background-color: #322a7d"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    خيارات
                  </button>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <!-- تعديل toggel button-->
                    <li>
                      <button
                        @click="(edit_purchases = true), Editpurchase(purchase)"
                        class="dropdown-item"
                      >
                        تعديل
                      </button>
                    </li>
                    <!-- حذف -->
                    <li>
                      <button
                        @click="deletepurchase(purchase.id)"
                        class="dropdown-item"
                      >
                        حذف
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- modal popup add-->
          <div class="root">
            <teleport to="body">
              <div class="modalpopup" v-if="add_purchases">
                <div class="text-center">
                  <h1>add purchases</h1>
                  <h2>wellcom here every body</h2>
                  <!-- اختيار التاجر -->
                  <div class="row g-3 align-items-center">
                    <div class="col-auto d-block mx-auto m-3">
                      <select class="form-select" v-model="provider_id">
                        <option disabled value="">اسم التاجر</option>
                        <option
                          :value="provider.id"
                          v-for="provider in providers"
                          :key="provider.id"
                        >
                          {{ provider.name }}
                        </option>
                      </select>
                      <!-- <span class="erroe-feedbak" v-if="v$.selected.$error">{{
                        v$.selected.$errors[0].$message
                      }}</span> -->
                      <!-- <div>Selected: {{ selected }}</div> -->
                    </div>
                  </div>
                  <!-- name اسم المنتج -->
                  <div class="row g-3 align-items-center">
                    <div class="col-auto d-block mx-auto m-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="اسم المنتج"
                        v-model="name"
                      />
                      <span class="erroe-feedbak" v-if="v$.name.$error">{{
                        v$.name.$errors[0].$message
                      }}</span>
                    </div>
                  </div>
                  <!-- العملية الحسابية -->
                  <div class="">
                    <!-- amount -->
                    <input
                      style="width: 100px"
                      class=""
                      type="number"
                      id="amount"
                      v-model="amount"
                      placeholder="amount"
                    />&nbsp;
                    <span class="erroe-feedbak" v-if="v$.amount.$error">{{
                      v$.amount.$errors[0].$message
                    }}</span>
                    <!-- price -->
                    <input
                      style="width: 100px"
                      class=""
                      type="number"
                      id="secondNumb"
                      v-model="price"
                      placeholder="price"
                    />
                    <span class="erroe-feedbak" v-if="v$.price.$error">{{
                      v$.price.$errors[0].$message
                    }}</span>
                    <h6 class="mt-2">result is {{ result }}</h6>
                  </div>
                  <button @click="addpurchases()">add</button>&nbsp;
                  <button @click="(add_purchases = false), reset()">
                    close
                  </button>
                </div>
              </div>
            </teleport>
          </div>
          <!-- modal popup edit-->
          <div class="root">
            <teleport to="body">
              <div class="modalpopup" v-if="edit_purchases">
                <div class="text-center">
                  <h1>add purchases</h1>
                  <h2>wellcom here every body</h2>
                  <!-- اختيار التاجر -->
                  <div class="row g-3 align-items-center">
                    <div class="col-auto d-block mx-auto m-3">
                      <select class="form-select" v-model="provider_id">
                        <option disabled value="">اسم التاجر</option>
                        <option
                          :value="provider.id"
                          v-for="provider in providers"
                          :key="provider.id"
                        >
                          {{ provider.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <!-- name اسم المنتج -->
                  <div class="row g-3 align-items-center">
                    <div class="col-auto d-block mx-auto m-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="اسم المنتج"
                        v-model="name"
                      />
                      <span class="erroe-feedbak" v-if="v$.name.$error">{{
                        v$.name.$errors[0].$message
                      }}</span>
                    </div>
                  </div>
                  <!-- العملية الحسابية -->
                  <div class="">
                    <!-- amount -->
                    <input
                      style="width: 100px"
                      class=""
                      type="number"
                      id="amount"
                      v-model="amount"
                      placeholder="amount"
                    />&nbsp;
                    <span class="erroe-feedbak" v-if="v$.amount.$error">{{
                      v$.amount.$errors[0].$message
                    }}</span>
                    <!-- price -->
                    <input
                      style="width: 100px"
                      class=""
                      type="number"
                      id="secondNumb"
                      v-model="price"
                      placeholder="price"
                    />
                    <span class="erroe-feedbak" v-if="v$.price.$error">{{
                      v$.price.$errors[0].$message
                    }}</span>
                    <h6 class="mt-2">result is {{ result }}</h6>
                  </div>
                  <!-- edit -->
                  <button @click="Updatepurchase()">تعديل</button>&nbsp;
                  <button @click="(edit_purchases = false), resetedit()">
                    close
                  </button>
                </div>
              </div>
            </teleport>
          </div>
        </div>
      </div>
      <!-- الاحصائيات -->
      <div class="col-3 mt-4 bg-white p-4 m-1 rounded-3">
        <!-- Search form -->
        <div class="row">
          <div class="col-8">
            <div class="input-group ps-5">
              <form class="d-flex" role="search">
                <button class="btn" type="submit">
                  <FontAwesome class="searchicon" icon="magnifying-glass" />
                </button>
                <input
                  class="form-control me-2"
                  style="border: 1px solid transparent; border-radius: 15px"
                  type="search"
                  placeholder="ابحث..."
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
          <div class="col-4">
            <div class="float-start">
              <span class="text-end fw-bold fs-5 m-1">دياب</span>
              <span>
                <img
                  src="https://st2.depositphotos.com/1007566/11541/v/950/depositphotos_115416492-stock-illustration-avatar-business-man-vector-graphic.jpg"
                  width="40"
                  class="rounded-circle"
                />
              </span>
            </div>
          </div>
        </div>
        <!-- ملخص الاحصائيات -->
        <div class="row">
          <p>ملخص الاحصائيات</p>
          <button
            style="height: 150px; background-color: #322a7d"
            class="rounded-4 text-white"
          >
            <div class="mb-3">
              <p class="fw-bold"><strong>اجمالي المشتريات</strong></p>
            </div>
            <h2><strong>25,455.00</strong></h2>
          </button>
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
  name: "PurchasesCom",
  data() {
    return {
      v$: useVuelidate(),
      add_purchases: false,
      edit_purchases: false,
      amount: "", //amount
      price: "", //price
      // selected: "",
      providers: [],
      provider_id: "",
      name: "", //اسم المنتج
      purchases: [],
      // purchase: {
      //   id: "",
      //   amount: "", //amount
      //   price: "", //price
      //   provider_id: "",
      //   name: "", //اسم المنتج
      // },
      purshase_id: "",
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(5) },
      provider_id: { required },
      amount: { required },
      price: { required },
    };
  },
  //methods result number 4 x 5
  computed: {
    result: function () {
      return this.amount * this.price;
    },
  },
  /* get providers and purchases*/
  async mounted() {
    console.log("purchases");
    let result = await axios.get(
      `https://e-real.almona.host/lab/public/api/purchases`
    );
    if (result.status == 200) {
      console.log(result.data);
      this.purchases = result.data.purchases;
    }

    console.log("providers");
    let allproviders = await axios.get(
      `https://e-real.almona.host/lab/public/api/providers`
    );
    if (allproviders.status == 200) {
      console.log(allproviders.data);
      this.providers = allproviders.data.providers;
    }
  },
  methods: {
    async loadpurchase() {
      let result = await axios.get(
        `https://e-real.almona.host/lab/public/api/purchases`
      );
      if (result.data.success == true) {
        console.log(result.data);
        this.purchases = result.data.purchases;
      }
    },
    reset() {
      this.provider_id = "";
      this.name = "";
      this.amount = "";
      this.price = "";
      this.v$.name.$errors[0].$message = ""; // اسم المنتج
      this.v$.amount.$errors[0].$message = "";
      this.v$.price.$errors[0].$message = "";
      console.log("popup reset success");
    },
    resetedit() {
      this.provider_id = "";
      this.name = "";
      this.amount = "";
      this.price = "";
      console.log("popup resetedit success");
    },
    async addpurchases() {
      console.log("add purchases function");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated successfuly");
        let result = await axios.post(
          `https://e-real.almona.host/lab/public/api/add_purchase`,
          {
            name: this.name,
            provider_id: this.provider_id,
            amount: this.amount,
            price: this.price,
          }
        );
        console.log("add_purchase success");
        setTimeout(() => {
          this.provider_id = "";
          this.name = "";
          this.amount = "";
          this.price = "";
          this.v$.name.$errors[0].$message = ""; // اسم المنتج
          this.v$.amount.$errors[0].$message = "";
          this.v$.price.$errors[0].$message = "";
        });
        console.log(result);
        if (result.data.success == true) {
          console.log("data true purchase added success");
          this.loadpurchase();
        } else {
          console.log("data false");
        }
      } else {
        console.log("form validated faild");
      }
    },
    async deletepurchase(id) {
      console.log("delete function run");
      let result = await axios.post(
        `https://e-real.almona.host/lab/public/api/del_purchase/${id}`,
        {}
      );
      if (result.data.success == true) {
        console.log(" purchase deleted succesfuly");
        console.log(result.data);
        this.loadpurchase();
      } else {
        console.log("end dletepurchases");
      }
    },
    async Editpurchase(purchase) {
      // this.user_id = purchase.id;
      this.name = purchase.name;
      this.amount = purchase.amount;
      this.price = purchase.price;
      this.provider_id = purchase.provider_id;
      this.purshase_id = purchase.id;
      // this.purchase.id = purchase.id;
      // this.purchase.name = purchase.name;
      // this.purchase.amount = purchase.amount;
      console.log("done open Editpurchase");
    },
    async Updatepurchase() {
      console.log("update purchase function");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated successfuly");
        let result = await axios.post(
          `https://e-real.almona.host/lab/public/api/edit_purchase/${this.purshase_id}`,
          {
            name: this.name,
            amount: this.amount,
            price: this.price,
            provider_id: this.provider_id,
          }
        );
        // setTimeout(() => {
        //   this.name = "";
        //   this.number = "";
        //   this.v$.number.$errors[0].$message = "";
        //   this.v$.name.$errors[0].$message = "";
        // }, 1000);
        console.log(result);
        if (result.data.success == true) {
          console.log("data updated succesfuly");
          this.loadpurchase();
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
.root {
  position: relative;
}

.modalpopup {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.212);
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
