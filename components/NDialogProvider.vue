<script setup>
import { NDialogProvider } from "naive-ui";
</script>

<template>
  <NDialogProvider v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NDialogProvider>
</template>