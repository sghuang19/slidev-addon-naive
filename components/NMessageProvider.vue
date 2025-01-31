<script setup>
import { NMessageProvider } from "naive-ui";
</script>

<template>
  <NMessageProvider v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NMessageProvider>
</template>