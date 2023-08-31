import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();
// https://www.googleapis.com/customsearch/v1?key=AIzaSyCtirkR1A-Lr2J2vpHdFNWGoCkWvGji8sA&cx=91e38a5998bdd43c3&q=${search.value}

export const engine = defineStore("engine", {
  state: () => ({
    project_name: "Woowle I'm Going to Beautiful You",
    search: "",
  }),
  getters: {},
  actions: {
    search_engine() {
      axios
        .get(
          `https://www.googleapis.com/customsearch/v1?key=AIzaSyCtirkR1A-Lr2J2vpHdFNWGoCkWvGji8sA&cx=91e38a5998bdd43c3&q=${this.search}`
        )
        .then((response) => {
          console.log(response.data.items);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.search = "";
        });
    },
  },
});
