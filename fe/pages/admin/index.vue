<template>
  <div class="admin-dashboard">
    <div class="grid grid-cols-4 gap-4">
      <div class="col-span-1 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
        <nav>
          <h2 class="text-xl font-bold mb-4 text-gray-900">Quản Trị</h2>
          <ul>
            <li class="mb-2">
              <a href="#" class="hover:bg-gray-100 p-2 rounded block transition-colors">
                Người Dùng
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:bg-gray-100 p-2 rounded block transition-colors">
                Hệ Thống
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:bg-gray-100 p-2 rounded block transition-colors">
                Báo Cáo
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      <div class="col-span-3 bg-gray-50 p-4">
        <div class="overview">
          <h1 class="text-2xl font-bold mb-4 text-gray-900">Thống Kê Hệ Thống</h1>
          <div class="grid grid-cols-3 gap-4">
            <div class="card bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900">Tổng Người Dùng</h3>
              <p class="text-3xl font-bold text-primary-600">{{ totalUsers }}</p>
            </div>
            <div class="card bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900">Dự Án Hoạt Động</h3>
              <p class="text-3xl font-bold text-primary-600">{{ activeProjects }}</p>
            </div>
            <div class="card bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900">Công Việc Mới</h3>
              <p class="text-3xl font-bold text-primary-600">{{ newTasks }}</p>
            </div>
          </div>
        </div>

        <div class="recent-activity mt-8">
          <h2 class="text-xl font-bold mb-4 text-gray-900">Hoạt Động Gần Đây</h2>
          <table class="w-full bg-white rounded-lg shadow-lg border border-gray-200">
            <thead>
              <tr class="bg-gray-100">
                <th class="p-3 text-left text-gray-900">Người Dùng</th>
                <th class="p-3 text-left text-gray-900">Hành Động</th>
                <th class="p-3 text-left text-gray-900">Thời Gian</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="activity in recentActivities" :key="activity.id" class="border-b border-gray-200">
                <td class="p-3 text-gray-900">{{ activity.user }}</td>
                <td class="p-3 text-gray-900">{{ activity.action }}</td>
                <td class="p-3 text-gray-600">{{ activity.time }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const totalUsers = 250
const activeProjects = 45
const newTasks = 120

const recentActivities = [
  { id: 1, user: 'Admin', action: 'Tạo dự án mới', time: '2 phút trước' },
  { id: 2, user: 'User A', action: 'Cập nhật task', time: '15 phút trước' },
  { id: 3, user: 'User B', action: 'Hoàn thành dự án', time: '1 giờ trước' }
]
</script>

<style scoped>
.btn-primary {
  @apply bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors;
}
</style>
