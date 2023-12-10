import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  if (mode === "production") {
    return {
      base: "/babylon-3dgs-testbed/",
    };
  }

  return {};
});
