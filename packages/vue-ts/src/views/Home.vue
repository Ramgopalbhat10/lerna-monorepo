<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const matchRoute = (route: string) => {
  router.push(`/${route}`)
}
</script>

<template>
  <h1 class="text-3xl text-center p-2 font-bold">
    Vue 3 with Typescript, Vuex and Vue Router.
  </h1>
  <div class="container flex my-4">
    <div class="w-1/4 p-14 flex justify-center items-center bg-green-200 text-2xl font-bold rounded-md shadow-md cursor-pointer"
      @click="matchRoute('todos')"
    >
      <h3>Todos</h3>
    </div>
  </div>
</template>