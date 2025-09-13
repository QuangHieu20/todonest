<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Global styles and meta
useHead({
  title: 'TodoNest - Quản Lý Công Việc',
  meta: [
    { 
      name: 'description', 
      content: 'Ứng dụng quản lý công việc hiệu quả với NestJS và Nuxt 3' 
    }
  ]
})
</script>

<style>
/* Global styles */
body {
  @apply bg-gray-50 text-gray-900;
}
</style>
