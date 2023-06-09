<template>
  <div class="chess-container">
    <div class="chessboard">
      <div v-for="row in 8" :key="row" class="chessboard-row">
        <div
          v-for="column in 8"
          :key="column"
          :class="[
            'chessboard-square',
            { 'dark-square': isDarkSquare(row, column) },
            { 'light-square': !isDarkSquare(row, column) },
            { highlighted: isSquareHighlighted(row, column) },
          ]"
          @click="highlightSquare(row, column)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";

const $store = useAppStore();
const isDarkSquare = (row: number, column: number) => {
  return (row + column) % 2 === 0;
};
const highlightSquare = (row: number, column: number) => {
  if (isSquareHighlighted(row, column)) {
    return;
  }
  const square = { row, column };
  $store.highlightedSquares.push(square);
};
const isSquareHighlighted = (row: number, column: number) => {
  return $store.highlightedSquares.some(
    (square) => square.row === row && square.column === column
  );
};
</script>

<style lang="scss" scoped>
@import "@/styles/chessboard.scss";
</style>
