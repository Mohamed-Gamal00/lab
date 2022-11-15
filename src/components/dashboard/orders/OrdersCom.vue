<template>
  <div class="container mt-5">
    <div class="mt-2 textcolor">
      <span>
        <span><FontAwesome icon="cart-plus" class="" /></span>
        <span class="p-1 textcolor">
          <h5 class="fw-bold d-inline p-1"><strong>الطلبات</strong></h5>
        </span>
      </span>
      <span class="float-start">
        <!-- Button trigger modal -->
        <button
          class="btn btn-primary"
          style="background-color: #322a7d"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          إضافة طلب
          <span
            ><FontAwesome style="color: orange" icon="user-plus" class="mr-3"
          /></span>
        </button>
      </span>
    </div>
    <div>
      <!-- doctor details -->
      <div class="" v-for="order in orders" :key="order.id">
        <!-- 1 -->
        <div class="mt-4 p-1">
          <div
            class="row p-2"
            style="
              border: 1px solid transparent;
              border-radius: 20px;
              background-color: white;
            "
          >
            <!-- tables -->
            <div class="">
              <table class="table table-striped table-hover">
                <!-- Head -->
                <thead>
                  <tr>
                    <th scope="col" class="text-secondary">رقم الطلب</th>
                    <th scope="col" class="text-secondary">الدكتور</th>
                    <th scope="col" class="text-secondary">اسم الحالة</th>
                    <th scope="col" class="text-secondary">تاريخ الاضافة</th>
                    <th scope="col" class="text-secondary">لون الضرس</th>
                    <th scope="col" class="text-secondary">السعر</th>
                    <th scope="col" class="text-secondary">التفاصيل</th>
                  </tr>
                </thead>
                <!-- body get data-->
                <tbody>
                  <tr>
                    <!-- رقم الطلب -->
                    <th scope="row">{{ order.patient_no }}</th>
                    <!-- اسم الدكتور -->
                    <td>
                      <div class="text-end">
                        <img
                          src="https://st2.depositphotos.com/1007566/11541/v/950/depositphotos_115416492-stock-illustration-avatar-business-man-vector-graphic.jpg"
                          width="30"
                          class="rounded-circle"
                        />
                        <span class="d-inline">{{ order.doctor }}</span>
                      </div>
                    </td>
                    <!-- اسم المريض -->
                    <td>{{ order.patient_name }}</td>
                    <!-- تاريخ الاضافة -->
                    <td>{{ order.created_at }}</td>
                    <!-- لون الضرس -->
                    <td>
                      <div
                        style="
                          width: 30px;
                          height: 30px;
                          background-color: #fff;
                          margin-right: 20px;
                        "
                      ></div>
                    </td>
                    <!-- السعر -->
                    <td>{{ order.price }}</td>
                    <!-- التفاصيل -->
                    <td>
                      <span class=""
                        ><button
                          class="btn btn-primary"
                          @click="order.open = !order.open"
                          style="margin-left: 27px; background-color: #322a7d"
                        >
                          التفاصيل
                          <span
                            ><FontAwesome
                              style="color: orange"
                              icon="circle-chevron-down"
                          /></span>
                        </button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="row" v-show="order.open">
                <!-- 1 img  اسم الدكتور والعنوان اسم -------الحالة ومعياد الطلب  -->
                <div class="col-6 mt-2">
                  <div class="row">
                    <!-- img -->
                    <div class="col-2">
                      <div class="text-end">
                        <img
                          :src="order.image"
                          width="80"
                          height="80"
                          class="rounded-circle"
                        />
                      </div>
                    </div>
                    <!-- اسم الدكتور والعنوان -->
                    <div class="col-6">
                      <ul class="p-0">
                        <!-- اسم الدكتور والعنوان -->
                        <li class="">
                          <div class="">
                            <h4 class="mb-0 text-black fw-bold">
                              <strong>د/ {{ order.doctor }}</strong>
                            </h4>
                            <!-- العنوان -->
                            <p class="text-secondary address mt-2">
                              <span><FontAwesome icon="location-dot" /></span>
                              {{ order.address }}
                            </p>
                          </div>
                        </li>
                        <!-- ميعاد الطلب -->
                        <li class="text-secondary fw-bold">
                          <p class="m-0 p-0">تاريخ الاضافة</p>
                          <p class="fw-bold text-black">
                            {{ order.created_at }}
                          </p>
                        </li>
                      </ul>
                      <!-- التعديل و الحذف-->
                      <div class="mt-5">
                        <span class="m-1 p-0"
                          ><button
                            type="button"
                            class="btn btn-outline-success"
                          >
                            تعديل الطلب
                          </button>
                        </span>
                        <span class="m-1 p-0"
                          ><button type="button" class="btn btn-outline-danger">
                            حذف الطلب
                          </button>
                        </span>
                      </div>
                    </div>
                    <!-- اسم الحالة ومعياد الطلب -->
                    <div class="col-4">
                      <ul class="p-0 mt-2">
                        <!-- اسم الحالة -->
                        <li class="text-secondary fw-bold">
                          <p class="m-0 p-0">اسم الحالة</p>
                          <p class="fw-bold text-black">
                            {{ order.patient_name }}
                          </p>
                        </li>
                        <!-- ميعاد الطلب -->
                        <li class="text-secondary fw-bold">
                          <p class="m-0 p-0">ميعاد الطلب</p>
                          <p class="fw-bold text-black">
                            {{ order.required_date }}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- 2 -->
                <div class="col-6 mt-2">
                  <div class="row">
                    <!-- الضرس -->
                    <div class="col-3">
                      <ul class="p-0 text-center fw-bold">
                        <li class="text-secondary fw-bold">الضرس</li>
                        <li>{{ order.type }}</li>
                      </ul>
                    </div>
                    <!-- السعر -->
                    <div class="col-3 fw-bold">
                      <ul class="p-0 text-center">
                        <li class="text-secondary fw-bold">السعر</li>
                        <li class="mt-3">{{ order.price }}</li>
                      </ul>
                    </div>
                    <!-- شكل الاسنان -->
                    <div class="col-6">
                      <div class="text-center">
                        <img src="" alt="img" width="180" class="rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <h1 class="p-0 m-0" v-if="!open">Hide me on click event!</h1> -->
            </div>
            <!-- tebles -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "OrdersCom",
  data() {
    return {
      open: false,
      orders: [],
    };
  },
  async mounted() {
    console.log("orders");
    let result = await axios.get(
      `https://e-real.almona.host/lab/public/api/orders`
    );
    if (result.data.success == true) {
      console.log("result data", result.data);
      this.orders = result.data.orders;
      console.log(this.orders);
    }
  },
};
</script>

<style></style>
