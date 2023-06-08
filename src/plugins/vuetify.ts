import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { VDataTable, VDataTableVirtual } from "vuetify/labs/components";
import { createVuetify } from "vuetify";

export default createVuetify({
  components: {
    VDataTable,
    VDataTableVirtual,
  },
  display: {
    mobileBreakpoint: "md",
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#42C482",
          secondary: "#D8E4D1",
          backgroundGray: "#312e2b",
        },
      },
      dark: {
        colors: {},
      },
    },
  },
});
