import { Square } from "@/types";
import { defineStore } from "pinia";

interface State {
  showNavbar: boolean;
  highlightedSquares: Square[];
}
export const useAppStore = defineStore("app", {
  state: (): State => ({
    showNavbar: false,
    highlightedSquares: [],
  }),
  getters: {
    squaresWithCount: (state) =>
      state.highlightedSquares.map((square, index) => {
        return {
          ...square,
          count: index + 1,
        };
      }),
  },
});
