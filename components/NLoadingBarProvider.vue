<script setup>
import { NLoadingBarProvider } from "naive-ui";
</script>

<template>
  <NLoadingBarProvider v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NLoadingBarProvider>
</template>