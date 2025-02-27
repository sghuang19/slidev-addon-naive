import { GlobalThemeOverrides } from "naive-ui";

declare global {
  interface NaiveConfig extends GlobalThemeOverrides {
    lightThemeOverrides?: GlobalThemeOverrides;
    darkThemeOverrides?: GlobalThemeOverrides;
  }
}
