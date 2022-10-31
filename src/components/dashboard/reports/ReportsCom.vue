<template>
  <div class="mt-5">
    <h3>التقارير</h3>
    <hr />
    <div class="container mb-5">
      <div class="row">
        <!-- col-1 -->
        <div class="col-6">
          <div class="row">
            <!-- date -->
            <div class="col">
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style="background-color: #e0dfeb"
                >
                  15/10/2019 15/6/2019
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- الطلبات والمشتريات -->
            <div class="col">
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style="background-color: #e0dfeb"
                >
                  الطلبات والمشتريات
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">الطلبات والمشتريات</a>
                  </li>
                  <li><a class="dropdown-item" href="#">الطلبات فقط</a></li>
                  <li>
                    <a class="dropdown-item" href="#">المشتريات فقط</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- جميع الاطباء -->
            <div class="col">
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style="background-color: #e0dfeb"
                >
                  جميع الاطباء
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">د/ معتز العسقلاني</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">د/ معتز العسقلاني</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">د/ معتز العسقلاني</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- col-2 -->
        <div class="col-6">
          <span class="float-start">
            <button
              type="button"
              class="btn btn-primary"
              style="background-color: #322a7d"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              طباعة
              <span
                ><FontAwesome style="color: orange" icon="print" class="mr-3"
              /></span>
            </button>
          </span>
        </div>
      </div>
      <!-- buttons -->
      <div class="row mt-4 d-flex justify-content-between">
        <!-- 1 -->
        <div class="col-3 d-flex justify-content-center">
          <div>
            <button
              class="buttonstyle d-flex align-items-center justify-content-center"
            >
              <span class="">
                <span class="float-start" style="margin-right: 10px">
                  <p class="p-0 m-1">عدد الطلبات</p>
                  <h4 class="p-0 m-0 fw-bold"><strong>185</strong></h4>
                </span>
                <span
                  class="float-start d-flex align-items-center justify-content-center iconspan"
                >
                  <FontAwesome
                    style="color: white"
                    icon="user-plus"
                    class="mr-3"
                  />
                </span>
              </span>
            </button>
          </div>
        </div>
        <!-- 2 -->
        <div class="col-3 d-flex justify-content-center">
          <div>
            <button
              class="buttonstyle d-flex align-items-center justify-content-center"
            >
              <span class="">
                <span class="float-start" style="margin-right: 10px">
                  <p class="p-0 m-1">اجمالي الدخل</p>
                  <span class="p-0 m-0 fw-bold" style="color: #68cc56">
                    <h4><strong>185 الف</strong> <small>جنيه</small></h4>
                  </span>
                </span>
                <span
                  class="float-start d-flex align-items-center justify-content-center iconspan"
                >
                  <FontAwesome
                    style="color: white"
                    icon="user-plus"
                    class="mr-3"
                  />
                </span>
              </span>
            </button>
          </div>
        </div>
        <!-- 1 -->
        <div class="col-3 d-flex justify-content-center">
          <div>
            <button
              class="buttonstyle d-flex align-items-center justify-content-center"
            >
              <span class="">
                <span class="float-start" style="margin-right: 10px">
                  <p class="p-0 m-1">عدد المشتريات</p>
                  <h4 class="p-0 m-0 fw-bold"><strong>80</strong></h4>
                </span>
                <span
                  class="float-start d-flex align-items-center justify-content-center iconspan"
                >
                  <FontAwesome
                    style="color: white"
                    icon="user-plus"
                    class="mr-3"
                  />
                </span>
              </span>
            </button>
          </div>
        </div>
        <!-- 2 -->
        <div class="col-3 d-flex justify-content-center">
          <div>
            <button
              class="buttonstyle d-flex align-items-center justify-content-center"
            >
              <span class="">
                <span class="float-start" style="margin-right: 10px">
                  <p class="p-0 m-1">اجمالي المشتريات</p>
                  <span class="p-0 m-0 fw-bold" style="color: #68cc56">
                    <h4 class="text-danger">
                      <strong>185 الف</strong> <small>جنيه</small>
                    </h4>
                  </span>
                </span>
                <span
                  class="float-start d-flex align-items-center justify-content-center iconspan"
                >
                  <FontAwesome
                    style="color: white"
                    icon="user-plus"
                    class="mr-3"
                  />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <!-- tebles -->
      <div class="row mt-4 d-flex justify-content-center">
        <div class="col-6 d-flex justify-content-center">
          <!-- tebles1 -->
          <div
            class="p-3 m-2 table-section"
            style="
              width: 590px;
              border: 1px solid transparent;
              border-radius: 20px;
              background-color: white;
            "
          >
            <div class="">
              <span class="float-end fw-bold"><strong>الطلبات</strong></span>
              <span class="float-start"
                ><a class="fw-bold" href="#">عرض الكل</a></span
              >
            </div>
            <table class="table table-striped table-hover mt-5">
              <thead>
                <tr>
                  <th scope="col" class="text-secondary">رقم الطلب</th>
                  <th scope="col" class="text-secondary">الدكتور</th>
                  <th scope="col" class="text-secondary">اسم الحالة</th>
                  <th scope="col" class="text-secondary">تاريخ الاضافة</th>
                  <th scope="col" class="text-secondary">السعر</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>دكتور</td>
                  <td>مرحبا</td>
                  <td>12/12/2022</td>
                  <td>200LE</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>دكتور</td>
                  <td>مرحبا</td>
                  <td>12/12/2022</td>
                  <td>200LE</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>دكتور</td>
                  <td>مرحبا</td>
                  <td>12/12/2022</td>
                  <td>200LE</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>دكتور</td>
                  <td>مرحبا</td>
                  <td>12/12/2022</td>
                  <td>200LE</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>دكتور</td>
                  <td>مرحبا</td>
                  <td>12/12/2022</td>
                  <td>200LE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <!-- tebles2 -->
          <div
            class="p-3 m-2 table-section"
            style="
              width: 590px;
              border: 1px solid transparent;
              border-radius: 20px;
              background-color: white;
            "
          >
            <div class="">
              <span class="float-end fw-bold"><strong>المشتريات</strong></span>
              <span class="float-start"
                ><a class="fw-bold" href="#">عرض الكل</a></span
              >
            </div>
            <table class="table table-striped table-hover mt-5">
              <thead>
                <tr>
                  <th scope="col" class="text-secondary">رقم الطلب</th>
                  <th scope="col" class="text-secondary">الدكتور</th>
                  <th scope="col" class="text-secondary">اسم الحالة</th>
                  <th scope="col" class="text-secondary">تاريخ الاضافة</th>
                  <th scope="col" class="text-secondary">السعر</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>دكتور</td>
                  <td>مرحبا</td>
                  <td>12/12/2022</td>
                  <td>200LE</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>دكتور</td>
                  <td>مرحبا</td>
                  <td>12/12/2022</td>
                  <td>200LE</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>دكتور</td>
                  <td>مرحبا</td>
                  <td>12/12/2022</td>
                  <td>200LE</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>دكتور</td>
                  <td>مرحبا</td>
                  <td>12/12/2022</td>
                  <td>200LE</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>دكتور</td>
                  <td>مرحبا</td>
                  <td>12/12/2022</td>
                  <td>200LE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RepotsCom",
};
</script>

<style>
.buttonstyle {
  width: 225px;
  height: 100px;
  border-radius: 9px;
  background-color: #322a7d;
  color: white;
}
.iconspan {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color: orange;
}
</style>
