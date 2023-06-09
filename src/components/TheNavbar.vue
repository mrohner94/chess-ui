<template>
  <v-navigation-drawer location="right" class="bg-white">
    <template v-slot:prepend>
      <v-list class="d-flex">
        <v-list-item
          prepend-avatar="http://placekitten.com/g/200/300"
          title="Michael Rohner"
          subtitle="mrohner320@gmail.com"
        ></v-list-item>
        <v-spacer />
        <v-list-item>
          <v-btn block color="primary" variant="flat" @click="onClickLogout">
            <span class="text-white font-weight-bold">Logout</span>
          </v-btn>
        </v-list-item>
      </v-list>

      <div class="d-flex justify-center">
        <div class="w-90">
          <v-divider class="border-opacity-100" />
        </div>
      </div>
    </template>
    <v-data-table-virtual
      :headers="(headers as any)"
      :items="$store.squaresWithCount"
      item-value="name"
    />

    <template v-slot:append>
      <div class="d-flex justify-center">
        <div class="w-90">
          <v-divider class="border-opacity-100" />
        </div>
      </div>
      <div class="pa-6">
        <v-btn block color="primary" variant="flat" @click="onClickLogout">
          <span class="text-white font-weight-bold">Logout</span>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";

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
