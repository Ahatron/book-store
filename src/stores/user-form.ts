import { defineStore } from "pinia";


export const useUserForm = defineStore('user-form', () => {
  function getMaxUserAge(): string {
    const currentDate = new Date()
    const maxDate = new Date(currentDate.getFullYear() - 18, 11, 31)
    const result = +maxDate.getFullYear() + '-' + (maxDate.getMonth() + 1) + '-' + maxDate.getDate()
    return result
  }

  return { getMaxUserAge }
})