<script setup lang="ts">
import { useStore } from '@/store'
import TodoItem from '@/features/todos/TodoItem.vue'

const store = useStore()
const items = store.state.todos.items
</script>

<template>
  <TodoItem v-for="item in items" :key="item.id" v-bind="item"/>
</template>