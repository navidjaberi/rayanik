import { createVuetify } from "vuetify";
import { VFileInput, VSelect, VTextField, VTextarea, VBtn, VAppBar } from "vuetify/components";
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    // add theme
    theme: {
      // add color variations
      //   variations: {
      //     colors: ["primary", "secondary"],
      //     lighten: 3,
      //     darken: 3,
      //   },
    },
    aliases: {
      VTextFieldPrimary: VTextField,
      VSelectPrimary: VSelect,
      VTextareaPrimary: VTextarea,
      VFileInputPrimary: VFileInput,
    },
    // Add the custom iconset
    icons: {
      defaultSet: "custom",
      aliases,
      sets: {
        custom,
      },
    },

    defaults: {
      VAppBar: {
        elevation: 0,
      },
      VBtn: {
        variant: "flat",
        height: 38,
        rounded: "lg",
        size: "small",
      },
      VTextField: {
        color: "primary",
        variant: "outlined",
        density: "compact",
      },
    },
  });
  app.vueApp.use(vuetify);
});
