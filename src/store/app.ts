import { Square } from "@/types";
import { defineStore } from "pinia";

interface State {
  showNavbar: boolean;
  navMinimized: boolean;
  entity: "TZI" | "TZA" | "TZC";
  highlightedSquares: Square[];
}
export const useAppStore = defineStore("app", {
  state: (): State => ({
    showNavbar: false,
    navMinimized: false,
    entity: "TZI",
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
