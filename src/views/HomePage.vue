<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '@/components/SideBar.vue'

const isSidebarOpen = ref(true) // Sidebar state
</script>

<template>
  <div class="container mx-auto">
    <main>
      <table>
        <tr>
          <th>Test Name</th>
          <th>#Result</th>
          <th>Cal. Mean</th>
          <th>Cal. SD</th>
          <th>Cal. CV</th>
          <th>Quo Mean</th>
          <th>Quo SD</th>
          <th>Quo CV</th>
          <th>BIAS(%)</th>
          <th>Total Error (%)</th>
          <th>TEA</th>
          <th>TEA Unit</th>
          <th>SIGMA</th>
          <th>SECRIT</th>
        </tr>
        <tr>
          <td>Hemoglobin</td>
          <td>9</td>
          <td>0</td>
          <td>0</td>
          <td>9</td>
          <td>0</td>
          <td>0</td>
          <td>9</td>
          <td>0</td>
          <td>9</td>
          <td>0</td>
          <td>0</td>
          <td>9</td>
          <td>0</td>
        </tr>
      </table>
    </main>
  </div>
</template>
