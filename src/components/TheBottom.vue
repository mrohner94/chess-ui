<style scoped>
.mt-mobile {
  margin-top: -12rem !important;
}
.mt-side {
  position: relative;
  top: -100px;
}
</style>
<template>
  <v-footer class="pa-0">
    <div class="w-100 h-25" :class="height > 560 ? 'mt-mobile' : 'mt-side'">
      <div>
        <v-list class="d-flex">
          <v-list-item
            prepend-avatar="http://placekitten.com/g/200/300"
            :title="width < 420 ? undefined : 'Michael Rohner'"
            :subtitle="width < 420 ? undefined : 'mrohner320@gmail.com'"
          ></v-list-item>
          <v-spacer />
          <v-list-item>
            <v-btn block color="primary" variant="flat" @click="onClickLogout">
              <span class="text-white font-weight-bold">Logout</span>
            </v-btn>
          </v-list-item>
        </v-list>
      </div>
      <div>
        <v-data-table-virtual
          :headers="(headers as any)"
          :items="$store.squaresWithCount"
          item-value="name"
          height="200"
        />
      </div>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";
import { useDisplay } from "vuetify/lib/framework.mjs";

const { width, height } = useDisplay();
const $store = useAppStore();
const $router = useRouter();

const headers = [
  {
    title: "#",
    align: "center",
    sortable: false,
    key: "count",
  },
  {
    title: "Row",
    align: "center",
    sortable: false,
    key: "row",
  },
  {
    title: "Column",
    align: "center",
    sortable: false,
    key: "column",
  },
];

const onClickLogout = () => {
  $router.push("/login");
  $store.$reset();
};
</script>
