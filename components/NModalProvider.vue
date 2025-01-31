<script setup>
import { NModalProvider } from "naive-ui";
</script>

<template>
  <NModalProvider v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NModalProvider>
</template>