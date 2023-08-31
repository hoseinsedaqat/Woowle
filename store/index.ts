import { API_KEY, BASE_URL, CX_KEY } from "@/api/index";

import { defineStore } from "pinia";

import axios from "axios";

export const engine = defineStore("engine", {
  state: () => ({
    project_name: "Woowle I'm Going to Beautiful You",
    search: "",
    search_data : [],
    search_loading: false
  }),
  getters: {
    get_search_data: (state) => state.search_data
  },
  actions: {
    search_engine() {
      this.search_loading = true;
      axios.get(BASE_URL + '?key=' + API_KEY + '&cx=' + CX_KEY + '&q=' + `${this.search}`)
        .then((response) => {
          this.search_data = response.data.items;
          this.search_loading = false;
        })
        .catch((error) => {
          throw new Error(error);
        })
        .finally(() => {
          this.search = "";
        });
    },
  },
});
