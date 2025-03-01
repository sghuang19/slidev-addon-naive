/** Virtual module defined by Vite */
declare module "virtual:naive" {
  import naive from "naive-ui";

  const defaultExport: typeof naive | undefined;
  /** Export Naive UI plugin as default if tree-shaking not available */
  export default defaultExport;

  export * from "naive-ui";
  export const config: NaiveConfig;
}
