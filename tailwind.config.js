module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#28a9a8",
          secondary: "#00033e",
          accent: "#37CDBE",
          neutral: "#3D4451",
          purple: "#570DF8",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
};
