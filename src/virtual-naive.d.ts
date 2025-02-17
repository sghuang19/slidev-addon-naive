/** Virtual module defined by Vite */

declare module "virtual:naive" {
  export * from "naive-ui";
  import naive from "naive-ui";
  const defaultExport: typeof naive | undefined;
  export default defaultExport;
}
