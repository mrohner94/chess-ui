<template>
  <div class="candy-mesh pa-6 h-100">
    <GlassPane class="d-flex align-center justify-center h-100 w-100">
      <v-card class="px-10 py-4">
        <div class="w-100">
          <div class="text-center">
            <h2 class="text-h4 mb-2">Welcome Back</h2>
            <p class="text-medium-emphasis">
              Enter your credentials to access your account
            </p>
          </div>
        </div>
        <v-form @submit.prevent="handleSubmit" class="py-10 w-100">
          <v-text-field label="Email" variant="outlined" />
          <v-text-field label="Password" variant="outlined" />
          <div class="d-flex justify-end mt-4 mb-n4">
            <v-btn variant="outlined" class="rounded-pill" @click="handleSubmit"
              >Sign in</v-btn
            >
          </div>
        </v-form>
      </v-card>
    </GlassPane>
  </div>
</template>

<script setup lang="ts">
import GlassPane from "@/components/GlassPane.vue";
import { useRouter } from "vue-router";

const $router = useRouter();

const handleSubmit = () => {
  $router.push("/");
};
</script>
