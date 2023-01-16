export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: "light",
    list: [
      { name: "light", class: "theme-light", color: "#F8F8F8", default: true },
      { name: "dark", class: "theme-dark", color: "#333333" },
    ],
  },
};
