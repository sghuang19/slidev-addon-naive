import { ref } from "vue";

import { config as rawConfig } from "virtual:naive";

const config = ref<NaiveConfig>(rawConfig);

export default config;
