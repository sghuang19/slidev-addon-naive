<script setup>
import { NSwitch } from "naive-ui";
</script>

<template>
  <NSwitch v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NSwitch>
</template>