import { visualizer } from "rollup-plugin-visualizer";

export default {
  plugins: [
    process.env.NODE_ENV !== "production" &&
      visualizer({
        open: true,
        gzipSize: true,
      }),
  ],
};
