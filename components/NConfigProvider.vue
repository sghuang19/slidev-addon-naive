<script setup>
import { NConfigProvider } from "naive-ui";
</script>

<template>
  <NConfigProvider v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NConfigProvider>
</template>