module.exports = async () => {
  const plugin = await import("prettier-plugin-tailwindcss");
  return {
    plugins: [plugin],
  };
};
