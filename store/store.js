import { defineStore } from 'pinia'

export const useStore = defineStore('changeColor', {
    state: () => ({
     active:true,
     color:false,
     showColor:false
         }),


  })