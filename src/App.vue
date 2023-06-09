<template>
  <v-app>
    <TheNavbar v-if="$store.showNavbar && !mobile" />
    <v-main class="bg-backgroundGray">
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
    <TheBottom v-if="$store.showNavbar && mobile" />
  </v-app>
</template>

<script lang="ts" setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheBottom from "./components/TheBottom.vue";
import { useAppStore } from "./store/app";
import { useDisplay } from "vuetify/lib/framework.mjs";

const { mobile } = useDisplay();
const $store = useAppStore();
</script>
