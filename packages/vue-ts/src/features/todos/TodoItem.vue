<script setup lang="ts">
import { toRefs, ref } from 'vue'
import { useStore } from '@/store'
import { TodoMutationType } from '@/@types'

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const props = defineProps<TodoItem>()
const store = useStore()
const { id, text, completed } = toRefs(props)
const toggleCompletion = () => {
  store.commit(TodoMutationType.CompleteItem, {
    id: id.value,
    completed: !completed.value
  })
}
const deleteTodo = (id: number) => {
  store.commit(TodoMutationType.DeleteItem, {
    id
  })
}
</script>

<template>
  <div class="flex items-center bg-white rounded-md shadow-md m-2 p-1 border-4"
    :class="completed ? 'border-green-500' : 'border-white'"
  >
    <div class="flex-shrink-0 m-1 ml-3 align-middle">
      <input type="checkbox" :checked="completed" @change="toggleCompletion()"/>
    </div>
    <div class="ml-6 flex-1">
      <h4 class="text-xl text-gray-900 leading-tight">{{ text }}</h4>
    </div>
    <button class="px-1.5 mx-1 rounded-sm bg-red-300 text-white" @click="deleteTodo(id)">X</button>
  </div>
</template>