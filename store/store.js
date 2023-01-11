import { defineStore } from "pinia";
import axios from "axios";
export const useStore = defineStore("changeColor", {
  state: () => ({
    active: true,
    color: false,
    showColor: false,
    infos: [],
    show:true
  }),

  actions: {
    async infoUsers() {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
      data.data.forEach(el =>{
        this.infos.push(el)
        this.show = false
      })
      } catch (error) {
        console.log(error);
      }
    },
  },
});
