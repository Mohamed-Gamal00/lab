<template>
  <div class="container-fluid backgroundcss">
    <!-- header -->
    <div class="row">
      <div class="mt-4">
        <h1 class="fw-bold fs-1 mb-0 font">معمل دياب</h1>
        <h6 class="m-0 p-0 fw-bold text-secondary">مرحبا بعودتك</h6>
      </div>
    </div>
    <!-- buttons -->
    <div class="row d-flex mt-5 justify-content-between m-2 buttonsection">
      <!-- col1 -->
      <div
        class="col-3 p-2 m-0 d-flex justify-content-around"
        style="
          width: 230px;
          height: 90px;
          border-radius: 20px;
          background-color: #322a7d;
        "
      >
        <span>
          <button type="button" class="btn btn-labeled text-light buttoncss">
            <span class="btn-label"></span>
            <p class="text-end mb-0 fw-bold">اضافة طلب</p>
            <p class="text-end mb-0 fontsize">اضافة طلب جديد للمعالجة</p>
          </button>
        </span>
        <span class="icondiv-col-1">
          <img class="user-plus" src="@/assets/HOME/users.svg" alt="" />
        </span>
      </div>
      <!-- col2 -->
      <div
        class="col-3 p-2 m-0 d-flex justify-content-around"
        style="
          width: 230px;
          height: 90px;
          border: 1px sloid;
          border-radius: 20px;
          background-color: #322a7d;
        "
      >
        <span>
          <button type="button" class="btn btn-labeled text-light buttoncss">
            <span class="btn-label"></span>
            <p class="text-end mb-0 fw-bold">اضافة طبيب</p>
            <p class="text-end text-wrap fontsize mb-0">
              اضافة طبيب جديد الي قائمة الاطباء
            </p>
          </button>
        </span>
        <span class="icondiv-col-2">
          <FontAwesome class="user-doctor" icon="user-doctor" />
          <!-- <img
            class="user-doctor"
            src="@/assets/HOME/icons8-doctor-96.svg"
            alt=""
          /> -->
        </span>
      </div>
      <!-- col3 -->
      <div
        class="col-3 p-2 m-0 d-flex justify-content-around"
        style="
          width: 230px;
          height: 90px;
          background-color: #322a7d;
          border-radius: 20px;
        "
      >
        <span>
          <button
            type="button"
            class="btn btn-labeled btn-tranparent text-light buttoncss"
          >
            <span class="btn-label"></span>
            <p class="text-end mb-0">التقارير</p>
            <p class="text-end mb-0 fontsize">عرض اجدد التقارير عن الطلبات</p>
          </button>
        </span>
        <span class="icondiv-col-3">
          <img class="flag" src="@/assets/HOME/graph.svg" alt="" />
        </span>
      </div>
    </div>
    <!-- tebles -->
    <div class="row p-4">
      <div class="table-section">
        <div class="mt-2 p-3">
          <span class="float-end fw-bold"><strong>أجدد الطلبات</strong></span>
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
</template>

<script>
export default {
  name: "ContentSection",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Cairo:wght@200;300;400;500;600;700;800&family=Readex+Pro:wght@200;300;400;500&display=swap");
* {
  direction: rtl;
  font-family: "Almarai", sans-serif;
}
.backgroundcss {
  background-color: #f5f6fa;
  height: 730px;
}
.font {
  color: #322a7d;
  font-weight: 700;
}
.monBouton {
  height: 120px;
}

/*******buttons*******/

.buttoncss {
  width: 140px;
}
.icondiv-col-1 {
  height: 60px;
  width: 62.22px;
  margin-top: 8px;
  background-color: rgb(245, 174, 42);
  border: 1px solid rgb(231, 164, 40);
  border-radius: 15px;
}
/**col1*/
.user-plus {
  color: white;
  font-size: 20px;
  margin-top: 35%;
  margin-right: 25px;
}
/**col2 ***/
.fontsize {
  font-size: 12px;
}
.icondiv-col-2 {
  height: 60px;
  width: 62.22px;
  margin-top: 8px;
  background-color: rgb(245, 174, 42);
  border: 1px solid rgb(231, 164, 40);
  border-radius: 15px;
}
.user-doctor {
  color: white;
  font-size: 20px;
  margin-top: 29%;
  margin-right: 21px;
}
/** col3 **/
.icondiv-col-3 {
  height: 60px;
  width: 62.22px;
  margin-top: 8px;
  background-color: rgb(245, 174, 42);
  border: 1px solid rgb(231, 164, 40);
  border-radius: 15px;
}
.flag {
  margin-top: 32%;
  margin-right: 21px;
  /* margin-left: 5px; */
}
/*****tables******/
.table-section {
  background-color: #ffffff;
  border: 1px solid white;
  border-radius: 20px;
  padding: 10px;
}
.table-section span a {
  color: orange;
  text-decoration: none;
}
.table-section span a::after {
  content: "\00BB";
  margin: 2px;
  color: orange;
  text-decoration: none;
}
</style>
