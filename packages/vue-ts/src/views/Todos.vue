<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from '@/store'
import { TodoActionTypes } from '@/@types'
import TodoList from '@/features/todos/TodoList.vue'
import TodoInput from '@/features/todos/TodoInput.vue'

const store = useStore()
const loading = computed(() => store.state.todos.loading)
const completedCount = computed(() => store.getters.completedCount)
const totalCount = computed(() => store.getters.totalCount)

onMounted(() => store.dispatch(TodoActionTypes.GetTodoItems))
</script>

<template>
  <div v-if="loading">
    <h3 class="text-center mt-4">Loading...</h3>
  </div>
  <div v-else>
    <p class="text-center mt-2">
      {{ completedCount }} of {{ totalCount }} completed.
    </p>
    <TodoList />
    <TodoInput />
  </div>
</template>