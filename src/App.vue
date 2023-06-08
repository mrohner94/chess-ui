<template>
  <v-app>
    <TheNavbar v-if="$store.showNavbar" />
    <v-main class="bg-backgroundGray">
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import TheNavbar from "@/components/TheNavbar.vue";

import { useAppStore } from "./store/app";
const $store = useAppStore();
</script>
