<template>
  <div class="container mt-5">
    <!-- header -->
    <div class="mt-2 textcolor">
      <span>
        <span><FontAwesome icon="user" class="mr-3" /></span>
        <span class="p-3 textcolor">
          <h5 class="fw-bold d-inline">الاعضاء</h5>
        </span>
      </span>
      <span class="float-start">
        <button
          type="button"
          class="btn"
          style="background-color: #322a7d; color: white"
        >
          اضافة عضو
          <span style="color: orange; margin-right: 10px"
            ><FontAwesome icon="user-plus"
          /></span>
        </button>
      </span>
    </div>
    <!-- members -->
    <div>
      <div
        v-for="member in members"
        :key="member.id"
        class="row d-flex justify-content-between mt-4 p-2 textcolor fw-bold"
        style="border-radius: 10px; background-color: white"
      >
        <!-- col1 -->
        <div class="col-5">
          <div class="row d-flex align-items-center">
            <!-- name -->
            <div class="col-5">
              <span><FontAwesome icon="user" /></span>
              <span class="m-3">محمد جمال</span>
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
                  >01021548542
                </button>
              </span>
            </div>
          </div>
        </div>
        <!-- col2 -->
        <div class="col-5">
          <div class="row d-flex align-items-center">
            <!-- التاريخ -->
            <div class="col-8 d-flex justify-content-center">
              <span class="d-block"
                ><span class="m-3 text-secondary">تاريخ الاضافة </span> اليوم
                10:45 صباحا</span
              >
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

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
  </div>
</template>

<script>
export default {
  name: "MemberCom",
  data() {
    return {
      members: [
        {
          name: "محمد جمال",
          phome: "01245218754",
          date: "10:45",
        },
        {
          name: "محمد جمال",
          phome: "01245218754",
          date: "10:45",
        },
        {
          name: "محمد جمال",
          phome: "01245218754",
          date: "10:45",
        },
        {
          name: "محمد جمال",
          phome: "01245218754",
          date: "10:45",
        },
        {
          name: "محمد جمال",
          phome: "01245218754",
          date: "10:45",
        },
        {
          name: "محمد جمال",
          phome: "01245218754",
          date: "10:45",
        },
        {
          name: "محمد جمال",
          phome: "01245218754",
          date: "10:45",
        },
      ],
    };
  },
};
</script>

<style>
.textcolor {
  color: #322a7d;
}
</style>
