<template>
  <div class="mt-5">
    <div class="fw-bold" style="color: #322a92">
      <span>
        <FontAwesome icon="gear" />
      </span>
      <span
        ><h5 class="fw-bold d-inline m-1"><strong>الاعدادات</strong></h5></span
      >
    </div>
    <hr />
    <div class="row d-flex justify-content-around">
      <div class="col-4 bg-white m-2 rounded-3">
        <!-- wellcom message &&&&&&  تغيير كلمة المرور -->
        <div class="row d-flex justify-content-center mt-4 mb-5">
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
          <div class="text-center">
            <button
              type="button"
              style="background: #322a92; width: 300px"
              class="btn text-white fw-bold"
            >
              تغيير كلمة المرور
            </button>
          </div>
        </div>
      </div>
      <!-- اضافة الالوان -->
      <div class="col-6">
        <div class="row">
          <div class="mt-4 mb-5">
            <span
              ><h4 class="fw-bold text-black">
                <strong>الوان الضروس</strong>
              </h4></span
            >
            <span>
              <!-- اضف لون -->
              <button
                @click="isOpen = true"
                type="button"
                style="width: 70px; height: 38px"
                class="btn shadow bg-white text-black fw-bold m-1"
              >
                اضف+
              </button>
            </span>
            <div class="d-flex flex-wrap mt-2 bg-white p-3 rounded-2">
              <span
                v-for="color in colors"
                :key="color.id"
                :style="[color.hex, width, overflow]"
                class="m-1 fw-bold p-1 text-center rounded-2"
              >
                <strong class="colorstyle">{{ color.name }}</strong>
                <teleport to="body">
                  <div class="modalpopup" v-if="isOpen">
                    <div class="text-center">
                      <h1>new popup</h1>
                      <h2>choose color</h2>
                      <div>
                        <!-- <label for="favcolor">Select your favorite color:</label -->
                        <br />
                        <input type="text" v-model="name" />
                        <input type="color" v-model="hex" /><br />
                        {{ hex }}
                      </div>
                      <button @click="(isOpen = false), addcolor()">
                        add color
                      </button>
                      <button @click="isOpen = false">close</button>
                    </div>
                  </div>
                </teleport>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SettingCom",

  data() {
    return {
      isOpen: false,
      width: "width:60px",
      overflow: "overflow:hidden",
      hex: "",
      name: "",
      colors: [],
    };
  },
  async mounted() {
    console.log("providers");
    let result = await axios.get(
      `https://e-real.almona.host/lab/public/api/colors`
    );
    if (result.status == 200) {
      console.log(result.data);
      this.colors = result.data.colors;
    }
  },
  methods: {
    async addcolor() {
      console.log("add color fun");
      let result = await axios.post(
        `https://e-real.almona.host/lab/public/api/add_color`,
        {
          name: this.name,
          hex: this.hex,
        }
      );
      if (result.data.success == true) {
        console.log("data true color added success");
        console.log(result.data.success);
      } else {
        console.log("data false");
      }
    },
  },
};
</script>
<style></style>
