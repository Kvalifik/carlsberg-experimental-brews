module.exports = {
  important: ".tailwind",
  mode: "jit",
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
  ],
  plugins: [],
  corePlugins: {
    preflight: false,
  }
};