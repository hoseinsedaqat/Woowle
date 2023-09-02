import { API_KEY, BASE_URL, CX_KEY } from "@/api/index";

import { defineStore } from "pinia";

import axios from "axios";

export const engine = defineStore("engine", {
  state: () => ({
    search: "",
    search_data : [],
    search_item_information: {},
    search_loading: false
  }),
  getters: {
    get_search_data: (state) => state.search_data,
    get_search_item_information: (state) => state.search_item_information
  },
  actions: {
    search_engine() {
      this.search_loading = true;
      axios.get(BASE_URL + '?key=' + API_KEY + '&cx=' + CX_KEY + '&q=' + `${this.search}`)
        .then((response) => {
          this.search_item_information = response.data.searchInformation;
          this.search_data = response.data.items;
          this.search_loading = false;
          this.search = "";
        })
        .catch((error) => {
          throw new Error(error);
        })
    },
  },
});
