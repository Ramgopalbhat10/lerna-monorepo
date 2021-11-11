<script setup lang="ts">
import { ref } from 'vue';
import { TodoMutationType } from '@/@types';
import { store } from '@/store';

const newTodo = ref("");
const addNewTodo = () => {
  store.commit(TodoMutationType.CreateItem, {
    id: Math.floor(Math.random() * 100),
    text: newTodo.value,
    completed: false
  })
  newTodo.value = ""
}
</script>

<template>
  <div class="flex">
    <input class="bg-white rounded-md m-2 p-1 border-4" type="text" v-model="newTodo"/>
    <button class="px-4 py-1 rounded-md m-2 bg-green-500 text-white" @click="addNewTodo()">add</button>
  </div>
</template>