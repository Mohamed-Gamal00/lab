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
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary"
          style="background-color: #322a7d"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
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
      <div class="col-6 p-4 m-1 rounded-3">
        <!-- اسم المنتج -->
        <div class="p-4 mb-2 rounded-3 shadow bg-white">
          <div class="row">
            <div class="col-3">
              <div class="fw-bold" style="color: #322a92">
                <span>
                  <FontAwesome icon="money-bill" />
                </span>
                <span
                  ><h6 class="fw-bold d-inline m-1">
                    <strong>اسم المنتج</strong>
                  </h6></span
                >
              </div>
            </div>
            <div class="col-5">
              <span>
                <h6><strong>معتز العسقلاني</strong></h6>
              </span>
            </div>
            <div class="col-2">2 * 400</div>
            <div class="col-2">800 <small>جنيه</small></div>
          </div>
        </div>
        <!-- اسم المنتج -->
        <div class="p-4 mb-2 rounded-3 shadow bg-white">
          <div class="row">
            <div class="col-3">
              <div class="fw-bold" style="color: #322a92">
                <span>
                  <FontAwesome icon="money-bill" />
                </span>
                <span
                  ><h6 class="fw-bold d-inline m-1">
                    <strong>اسم المنتج</strong>
                  </h6></span
                >
              </div>
            </div>
            <div class="col-5">
              <span>
                <h6><strong>معتز العسقلاني</strong></h6>
              </span>
            </div>
            <div class="col-2">2 * 400</div>
            <div class="col-2">800 <small>جنيه</small></div>
          </div>
        </div>
        <!-- اسم المنتج -->
        <div class="p-4 mb-2 rounded-3 shadow bg-white">
          <div class="row">
            <div class="col-3">
              <div class="fw-bold" style="color: #322a92">
                <span>
                  <FontAwesome icon="money-bill" />
                </span>
                <span
                  ><h6 class="fw-bold d-inline m-1">
                    <strong>اسم المنتج</strong>
                  </h6></span
                >
              </div>
            </div>
            <div class="col-5">
              <span>
                <h6><strong>معتز العسقلاني</strong></h6>
              </span>
            </div>
            <div class="col-2">2 * 400</div>
            <div class="col-2">800 <small>جنيه</small></div>
          </div>
        </div>
        <!-- اسم المنتج -->
        <div class="p-4 mb-2 rounded-3 shadow bg-white">
          <div class="row">
            <div class="col-3">
              <div class="fw-bold" style="color: #322a92">
                <span>
                  <FontAwesome icon="money-bill" />
                </span>
                <span
                  ><h6 class="fw-bold d-inline m-1">
                    <strong>اسم المنتج</strong>
                  </h6></span
                >
              </div>
            </div>
            <div class="col-5">
              <span>
                <h6><strong>معتز العسقلاني</strong></h6>
              </span>
            </div>
            <div class="col-2">2 * 400</div>
            <div class="col-2">800 <small>جنيه</small></div>
          </div>
        </div>
        <!-- اسم المنتج -->
        <div class="p-4 mb-2 rounded-3 shadow bg-white">
          <div class="row">
            <div class="col-3">
              <div class="fw-bold" style="color: #322a92">
                <span>
                  <FontAwesome icon="money-bill" />
                </span>
                <span
                  ><h6 class="fw-bold d-inline m-1">
                    <strong>اسم المنتج</strong>
                  </h6></span
                >
              </div>
            </div>
            <div class="col-5">
              <span>
                <h6><strong>معتز العسقلاني</strong></h6>
              </span>
            </div>
            <div class="col-2">2 * 400</div>
            <div class="col-2">800 <small>جنيه</small></div>
          </div>
        </div>
      </div>
      <!-- الاحصائيات -->
      <div class="col-4 mt-4 bg-white p-4 m-1 rounded-3">
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
export default {
  name: "PurchasesCom",
};
</script>

<style></style>
