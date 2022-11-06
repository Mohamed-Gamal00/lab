<!-- <template>
  <div class="container">
    <NavBarCom />
    <p class="text-end">
      welcome {{ userName }}
      <router-link :to="{ name: 'Profile' }">
        <button class="btn btn-info" type="button">Profile</button>
      </router-link>
    </p>
    <AddNewLocations />
    <UserLocations :allLocations="ListOfLocations" />
  </div>
</template>

<script>
import NavBarCom from "@/components/header/NavBar.vue";
import AddNewLocations from "@/components/locations/AddNewLocations.vue";
import UserLocations from "@/components/locations/UserLocations.vue";
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      userName: "",
      userId: "",
      ListOfLocations: [],
    };
  },
  components: {
    NavBarCom,
    AddNewLocations,
    UserLocations,
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Signup" });
    } else {
      this.userName = JSON.parse(user).name;
      this.userId = JSON.parse(user).id;
    }
    let result = await axios.get(
      `http://localhost:3000/locations?userId=${this.userId}`
    );
    if (result.status == 200 && result.data.length > 0) {
      console.log(result.data);
      this.ListOfLocations = result.data;
    }
  },
};
</script> -->
