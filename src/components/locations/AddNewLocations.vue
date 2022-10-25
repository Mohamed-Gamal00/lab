<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add New Restaurant
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              ِAdd New Restaurant
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @click.prevent>
              <div class="row g-3 align-items-center">
                <div class="col-auto d-block mx-auto m-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Restaurant Name"
                    v-model="state.name"
                  />
                  <span class="erroe-feedbak" v-if="v$.name.$error">{{
                    v$.name.$errors[0].$message
                  }}</span>
                </div>
              </div>
              <div class="row g-3 align-items-center">
                <div class="col-auto d-block mx-auto m-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Phone Number"
                    v-model="state.phone"
                  />
                  <span class="erroe-feedbak" v-if="v$.phone.$error">{{
                    v$.phone.$errors[0].$message
                  }}</span>
                </div>
              </div>
              <div class="row g-3 align-items-center">
                <div class="col-auto d-block mx-auto m-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Address"
                    v-model="state.address"
                  />
                  <span class="erroe-feedbak" v-if="v$.address.$error">{{
                    v$.address.$errors[0].$message
                  }}</span>
                </div>
              </div>
              <div class="row g-3 align-items-center">
                <div
                  class="col-auto d-block mx-auto m-3 alert alert-success"
                  v-if="successMessage.length > 0"
                >
                  {{ successMessage }}
                </div>
                <div
                  class="col-auto d-block mx-auto m-3 alert alert-danger"
                  v-if="errorMessage.length > 0"
                >
                  {{ errorMessage }}
                </div>
              </div>
              <br />
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              @click="addLocations()"
              type="button"
              class="btn btn-primary"
            >
              Add Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue"; //composition Api
export default {
  name: "AddNewLocations",
  setup() {
    const state = reactive({
      name: "",
      phone: "",
      address: "",
    });
    const rules = computed(() => {
      return {
        name: { required },
        phone: { required, minLength: minLength(10) },
        address: { required },
      };
    });
    const v$ = useValidate(rules, state);
    return {
      state,
      v$,
    };
  },
  data() {
    return {
      userId: "",
      successMessage: "",
      errorMessage: "",
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Signup" });
    } else {
      this.userId = JSON.parse(user).id;
    }
  },
  methods: {
    async addLocations() {
      this.v$.$validate(); //activate my validations
      if (!this.v$.$error) {
        console.log("Validated");
        let result = await axios.post(`http://localhost:3000/locations`, {
          name: this.state.name,
          phone: this.state.phone,
          address: this.state.address,
          userId: this.userId,
        });
        if (result.status == 201) {
          this.errorMessage = "";
          this.successMessage = "Added New Loction";
          this.$router.push({ name: "home" });
          setTimeout(() => {
            this.successMessage = "";
            this.errorMessage = "";
            this.state.name = "";
            this.state.phone = "";
            this.state.address = "";
            this.v$.name.$errors[0].$message = "";
            this.v$.phone.$errors[0].$message = "";
            this.v$.address.$errors[0].$message = "";
          }, 2000);
          console.log("add new location successfuly");
        } else {
          this.errorMessage = "";
          this.errorMessage = "somthing went wrong, try again!";
          console.log("Faild Adding New Location ");
        }
      } else {
        this.successMessage = "";
        this.errorMessage = "you must fill in all required fields!";
      }
    },
  },
};
</script>

<style></style>
