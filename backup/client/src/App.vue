<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { defineConfig, loadEnv } from 'vite'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import router from './router'
import Sidebar from './views/Sidebar/Sidebar.vue'
import Header from './views/Header/Header.vue'

console.log(import.meta.env.VITE_SERVER_URL + import.meta.env.VITE_SERVER_API_PATH)
</script>

<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <div class="flex-container" style="height: 100vh;">
    <div class="header stickybar">
      <Header></Header>
    </div>
    <div class="d-flex flex-row" style="height: 88%;">
      <Sidebar></Sidebar>
      <div class="col" style="height: 100%;">
        <RouterView />
      </div>
    </div>
  </div>
</template>
