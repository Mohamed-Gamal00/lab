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
          style="background-color: #322a7d"
        >
          اضافة طبيب
          <span><FontAwesome style="color: orange" icon="user-plus" /></span>
        </button>
      </span>
    </div>
    <!-- doctor details -->
    <div class="doctorsdetails">
      <!-- 1 -->
      <div class="mt-4 p-1" v-for="faq in faqs" :key="faq">
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
              <div class="col-2">
                <div class="text-end">
                  <img
                    src="https://st2.depositphotos.com/1007566/11541/v/950/depositphotos_115416492-stock-illustration-avatar-business-man-vector-graphic.jpg"
                    width="80"
                    class="rounded-circle"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="mt-2">
                  <h4 class="mb-0 text-black fw-bold">
                    <strong>د/ {{ faq.name }}</strong>
                  </h4>
                  <p class="text-secondary address mt-2">
                    <span><FontAwesome icon="location-dot" /></span>
                    {{ faq.address }}
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
                    >{{ faq.phone }}
                  </button>
                </span>
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="col-6 mt-2">
            <div class="row d-flex justify-content-center">
              <div class="col-4 text-start">
                <span class="fw-bold">اليوم {{ faq.time }} صباحا</span>
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
                      <li><a class="dropdown-item" href="#">تعديل</a></li>
                      <li>
                        <a class="dropdown-item" href="#">حذف</a>
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
                  <h2 class="fw-bold mt-2">
                    {{ faq.numberofrequierments }}
                  </h2></span
                >
              </div>
            </div>
          </div>
          <!-- tables -->
          <!-- 
            <div class="" v-show="faq.open">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col" class="text-secondary">رقم الطلب</th>
                  <th scope="col" class="text-secondary">الدكتور</th>
                  <th scope="col" class="text-secondary">اسم الحالة</th>
                  <th scope="col" class="text-secondary">تاريخ الاضافة</th>
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
                      <span class="d-inline">{{ faq.name }}</span>
                    </div>
                  </td>
                  <td>مرحبا</td>
                  <td>12/12/2022</td>
                  <td>200LE</td>
                  <td>
                    <span class="bg-dark"
                      ><button style="margin-left: 27px">التفاصيل</button></span
                    >
                  </td>
                </tr>
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
                  <td>200LE</td>
                  <td>
                    <span class="bg-dark"
                      ><button style="margin-left: 27px">التفاصيل</button></span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div> 
        -->
          <!-- tebles -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DoctorsCom",
  data() {
    return {
      faqs: [
        {
          open: false,
          name: "ulv العسقلاني",
          phone: "010254747542",
          address: "شارع الجيش",
          time: "10:30",
          numberofrequierments: "25",
        },
        {
          open: false,
          name: "معتز kijiij",
          phone: "0102547815552",
          address: "شارع الجيش",
          time: "10:30",
          numberofrequierments: "25",
        },
        {
          open: false,
          name: "ohgc العسقلاني",
          phone: "0102547815552",
          address: "شارع الجيش",
          time: "10:30",
          numberofrequierments: "25",
        },
      ],
    };
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
</style>
