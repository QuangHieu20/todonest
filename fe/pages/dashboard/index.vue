<template>
  <div class="dashboard">
    <div class="grid grid-cols-4 gap-4">
      <div class="col-span-1 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
        <!-- Sidebar/Navigation -->
        <nav>
          <h2 class="text-xl font-bold mb-4 text-gray-900">Dự Án</h2>
          <ul>
            <li v-for="project in projects" :key="project.id" class="mb-2">
              <a href="#" class="hover:bg-gray-100 p-2 rounded block transition-colors">
                {{ project.name }}
              </a>
            </li>
            <button class="btn-primary mt-4 w-full">Tạo Dự Án Mới</button>
          </ul>
        </nav>
      </div>
      
      <div class="col-span-3 bg-gray-50 p-4">
        <!-- Main Content Area -->
        <div class="overview">
          <h1 class="text-2xl font-bold mb-4 text-gray-900">Tổng Quan</h1>
          <div class="grid grid-cols-3 gap-4">
            <div class="card bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900">Tổng Số Dự Án</h3>
              <p class="text-3xl font-bold text-primary-600">{{ projects.length }}</p>
            </div>
            <div class="card bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900">Công Việc Đang Làm</h3>
              <p class="text-3xl font-bold text-primary-600">{{ inProgressTasks }}</p>
            </div>
            <div class="card bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900">Hoàn Thành</h3>
              <p class="text-3xl font-bold text-primary-600">{{ completedTasks }}</p>
            </div>
          </div>
        </div>

        <div class="recent-projects mt-8">
          <h2 class="text-xl font-bold mb-4 text-gray-900">Dự Án Gần Đây</h2>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="project in recentProjects" :key="project.id" class="project-card bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <h3 class="font-semibold text-gray-900">{{ project.name }}</h3>
              <div class="progress-bar mt-2 bg-gray-200 rounded-full h-2">
                <div :style="{ width: `${project.progress}%` }" class="bg-primary-500 h-full rounded-full"></div>
              </div>
              <p class="text-sm text-gray-600 mt-2">{{ project.progress }}% Hoàn Thành</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  { id: 1, name: 'Dự Án Web App' },
  { id: 2, name: 'Marketing Campaign' },
  { id: 3, name: 'Phát Triển Sản Phẩm Mới' }
]

const recentProjects = [
  { id: 1, name: 'Dự Án Web App', progress: 65 },
  { id: 2, name: 'Marketing Campaign', progress: 40 }
]

const inProgressTasks = 12
const completedTasks = 8
</script>

<style scoped>
.btn-primary {
  @apply bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors;
}
</style>
