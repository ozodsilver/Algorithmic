import { defineStore } from 'pinia'

export const useStore = defineStore('changeColor', {
    state: () => ({
         color: false,
         color2:false,
     active:true
         }),


  })