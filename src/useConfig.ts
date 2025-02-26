import { ref } from "vue";

import { type GlobalThemeOverrides } from "naive-ui";

export type Config = GlobalThemeOverrides & {
  lightThemeOverrides?: GlobalThemeOverrides;
  darkThemeOverrides?: GlobalThemeOverrides;
};

export default ref<Config>({});
