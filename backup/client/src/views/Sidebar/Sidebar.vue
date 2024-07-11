<script setup lang="ts">
import router from '@/router';
import { OhVueIcon } from 'oh-vue-icons'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRouteName = computed(() => route.name)

const links = [
  { to: '/home', toFancy: 'Anleitung', isSelected: false, icon: 'bi-house-fill' },
  { to: '/map', toFancy: 'Übersicht', isSelected: false, icon: 'fa-map-marked-alt' },
  { to: '/plans', toFancy: 'Buchungen', isSelected: false, icon: 'bi-bookmark-heart-fill' }
]


const isRouteActive = (routePath: string): boolean => {
  return route.path === routePath
}


</script>


<template>
  <div class="col-auto">
    <div class="stickysidebar">
      <div class="vstack gap-2 m-2">
        <div v-for="item in links">
          <router-link :to="item.to" class="">
            <div  class="p-2 m-1 link-button" :class="{active: isRouteActive(item.to)}">
              <div class="d-flex flex-row justify-content-between align-items-center">
                <div class="col-auto">
                  <OhVueIcon :name="item.icon" scale="1.5" class="link-icon"/>
                </div>
                <div class="col-auto d-none d-md-block">
                  <a class="">{{ item.toFancy }}</a>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.link-text-sidebar {
  color: black;
}

.active {
  background-color: rgb(45, 157, 151, 0.85);
  transform: scale(1.05);
}

.link-button:hover {
  transform: translate(5px, 0px);
  box-shadow: 0px 0px 3px rgb(0, 0, 0, 0.2);
  outline-color: rgb(45, 157, 158, 0.8);
}

.link-button {
  transition: 0.08s;
  border-radius: 4px;
}

.link-icon {
  color: rgb(43, 43, 43);
  margin-right: 15px;
}

a {
  text-decoration: none;
  color: rgb(43, 43, 43);
  text-align: center;
  font-size: large;
  font-family: sans-serif;
  text-decoration: none;
}

.is-selected {
  background-color: rgb(45, 157, 158, 0.8);
}

.stickysidebar {
  position: sticky;
  top: 8.2%;
  z-index: 100;
  width: 100%;
  height: 100%;
}
</style>
