<template>
  <div class="container mt-4 sidecontent">
    <!-- Search form -->
    <div class="row">
      <div class="col-10">
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
      <div class="col-2">
        <div class="moon d-flex align-items-center">
          <span><FontAwesome class="moon-icon" icon="moon" /></span>
        </div>
      </div>
    </div>
    <!-- wellcom message -->
    <div class="row d-flex justify-content-around mt-4">
      <div class="col-8">
        <div>
          <h5 class="mb-0">مرحبا</h5>
          <h2 class="mb-0">دياب</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      <div class="col-4 mt-2">
        <div class="text-center">
          <img
            src="https://st2.depositphotos.com/1007566/11541/v/950/depositphotos_115416492-stock-illustration-avatar-business-man-vector-graphic.jpg"
            width="90"
            class="rounded-circle"
          />
        </div>
      </div>
    </div>
    <!-- ملخص لاحصائيات -->
    <div class="row d-flex justify-content-around mt-4">
      <h5>ملخص الاحصائيات</h5>
      <div class="col-5 col5box text-light d-flex justify-content-center">
        <div class="box1 text-center">
          <p class="mb-0">الطلبات الجديدة</p>
          <p class="mb-0">
            <span class="fs-2 fw-bold mt-0"
              >46%<img class="m-1" src="@/assets/HOME/decrease.svg" alt=""
            /></span>
          </p>
        </div>
      </div>
      <div class="col-5 col5box text-light d-flex justify-content-center">
        <div class="box1 text-center">
          <p class="mb-0">الاطباء الجدد</p>
          <p class="mb-0">
            <span class="fs-2 fw-bold mt-0"
              >89%<img class="m-1" src="@/assets/HOME/increase.svg" alt=""
            /></span>
          </p>
        </div>
      </div>
    </div>
    <!-- All doctors -->
    <div class="mt-4">
      <span class="fw-bold text-black">الاطباء</span>
      <span class="float-start showall"
        ><strong><a href="" class="fw-bold">عرض الكل</a></strong>
      </span>
    </div>
    <!-- doctors section -->
    <div class="mt-4 mb-5">
      <div class="row d-flex justify-content-around mb-2">
        <div class="col-4 p-0">
          <div class="text-center">
            <img
              src="https://st2.depositphotos.com/1007566/11541/v/950/depositphotos_115416492-stock-illustration-avatar-business-man-vector-graphic.jpg"
              width="50"
              class="roundedd"
            />
          </div>
        </div>
        <div class="col-8 p-0">
          <div>
            <h6 class="mb-0 text-black fw-bold">د/ معتز العسقلاني</h6>
            <p class="text-secondary address">شارع الجيش-مصر للطيران</p>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-around mb-2">
        <div class="col-4 p-0">
          <div class="text-center">
            <img
              src="https://st2.depositphotos.com/1007566/11541/v/950/depositphotos_115416492-stock-illustration-avatar-business-man-vector-graphic.jpg"
              width="50"
              class="roundedd"
            />
          </div>
        </div>
        <div class="col-8 p-0">
          <div>
            <h6 class="mb-0 text-black fw-bold">د/ معتز العسقلاني</h6>
            <p class="text-secondary address">شارع الجيش-مصر للطيران</p>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-around mb-2">
        <div class="col-4 p-0">
          <div class="text-center">
            <img
              src="https://st2.depositphotos.com/1007566/11541/v/950/depositphotos_115416492-stock-illustration-avatar-business-man-vector-graphic.jpg"
              width="50"
              class="roundedd"
            />
          </div>
        </div>
        <div class="col-8 p-0">
          <div>
            <h6 class="mb-0 text-black fw-bold">د/ معتز العسقلاني</h6>
            <p class="text-secondary address">شارع الجيش-مصر للطيران</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideContent",
};
</script>

<style>
.sidecontent {
  background-color: #ffffff;
  padding-top: 10px;
  border: 1px solid transparent;
  border-radius: 20px;
}
/********search******/
.moon {
  border: 1px solid rgb(253, 253, 253);
  border-radius: 100%;
  background-color: rgb(243, 243, 243);
  width: 38px;
  height: 38px;
}
.moon-icon {
  margin-right: 70%;
  font-size: 20px;
}
/**********box************/
.col5box {
  height: 120px;
  background-color: #322a7d;
  border: 1px solid transparent;
  border-radius: 20px;
}
.box1 {
  height: 120px;
  border: 1px solid transparent;
  border-radius: 20px;
  position: relative;
  top: 20%;
}
/********All doctors*********/
.showall::after {
  content: "\00BB";
  margin: 2px;
  color: orange;
  text-decoration: none;
}
.showall a {
  text-decoration: none;
  color: orange;
}
.roundedd {
  border-radius: 15px;
}
.address {
  font-size: 13px;
}
</style>
