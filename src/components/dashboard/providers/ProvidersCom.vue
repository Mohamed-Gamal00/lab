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
        <!-- Button modal -->
        <button
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
      <div>
        <div
          class="row d-flex justify-content-between mt-4 p-2 textcolor fw-bold"
          style="border-radius: 10px; background-color: white"
          v-for="faq in faqs"
          :key="faq.id"
        >
          <div class="col-5">
            <div class="row d-flex align-items-center">
              <!-- name -->
              <div class="col-5">
                <span><FontAwesome icon="user" /></span>
                <span class="m-3">satamony reda</span>
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
                    >010212354135
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div class="col-5">
            <div class="row d-flex align-items-center">
              <div class="col-8 d-flex justify-content-center">
                <span class="d-block"
                  ><span class="m-3 text-secondary">تاريخ الاضافة </span> اليوم
                  10:45 صباحا</span
                >
              </div>
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
  </div>
</template>

<script>
export default {
  name: "ProvidersCom",
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
.textcolor {
  color: #322a7d;
}
</style>
