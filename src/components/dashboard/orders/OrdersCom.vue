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
          type="button"
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
      <div class="" v-for="faq in faqs" :key="faq.id">
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
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <div class="text-end">
                        <img
                          src="https://st2.depositphotos.com/1007566/11541/v/950/depositphotos_115416492-stock-illustration-avatar-business-man-vector-graphic.jpg"
                          width="30"
                          class="rounded-circle"
                        />
                        <span class="d-inline">دكتور</span>
                      </div>
                    </td>
                    <td>مرحبا</td>
                    <td>12/12/2022</td>
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
                    <td>200LE</td>
                    <td>
                      <span class=""
                        ><button
                          @click="faq.open = !faq.open"
                          style="margin-left: 27px"
                        >
                          التفاصيل
                        </button></span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="row" v-show="faq.open">
                <!-- 1 -->
                <div class="col-6 mt-2">
                  <div class="row">
                    <!-- img -->
                    <div class="col-2">
                      <div class="text-end">
                        <img
                          src="https://st2.depositphotos.com/1007566/11541/v/950/depositphotos_115416492-stock-illustration-avatar-business-man-vector-graphic.jpg"
                          width="80"
                          class="rounded-circle"
                        />
                      </div>
                    </div>
                    <!-- title -->
                    <div class="col-6">
                      <ul class="p-0">
                        <!-- اسم الدكتور والعنوان -->
                        <li class="">
                          <div class="">
                            <h4 class="mb-0 text-black fw-bold">
                              <strong>د/ معتز العسقلاني</strong>
                            </h4>
                            <!-- العنوان -->
                            <p class="text-secondary address mt-2">
                              <span><FontAwesome icon="location-dot" /></span>
                              شارع الجيش - مصر للطيران
                            </p>
                          </div>
                        </li>
                        <!-- ميعاد الطلب -->
                        <li class="text-secondary fw-bold">
                          <p class="m-0 p-0">تاريخ الاضافة</p>
                          <p class="fw-bold text-black">19/5/2020</p>
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
                          <p class="fw-bold text-black">mohamed kalamata</p>
                        </li>
                        <!-- ميعاد الطلب -->
                        <li class="text-secondary fw-bold">
                          <p class="m-0 p-0">ميعاد الطلب</p>
                          <p class="fw-bold text-black">19/5/2020</p>
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
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                      </ul>
                    </div>
                    <!-- السعر -->
                    <div class="col-3 fw-bold">
                      <ul class="p-0 text-center">
                        <li class="text-secondary fw-bold">السعر</li>
                        <li>300 جنيه</li>
                        <li>300 جنيه</li>
                        <li>300 جنيه</li>
                        <li class="mt-3">900 جنيه</li>
                      </ul>
                    </div>
                    <!-- شكل الاسنان -->
                    <div class="col-6">
                      <div class="text-center">
                        <img
                          src="https://o.remove.bg/downloads/e5bf83ee-09b8-444a-959e-c5716bfb42ca/mouth-removebg-preview.png"
                          width="180"
                          class="rounded"
                        />
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
export default {
  name: "OrdersCom",
  data() {
    return {
      faqs: [
        {
          open: false,
        },
      ],
    };
  },
};
</script>

<style></style>
