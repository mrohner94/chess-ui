<template>
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

<style scoped>
.chessboard {
  display: flex;
  flex-direction: column;
}

.chessboard-row {
  display: flex;
}

.chessboard-square {
  width: 50px;
  height: 50px;
}

.dark-square {
  background-color: #b58863;
}

.light-square {
  background-color: #f0d9b5;
}

.chessboard-square:hover {
  background-color: #e0e0e0;
}

.chessboard-square.highlighted {
  background-color: #add8e6;
}
</style>
