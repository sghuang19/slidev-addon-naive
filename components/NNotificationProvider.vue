<script setup>
import { NNotificationProvider } from "naive-ui";
</script>

<template>
  <NNotificationProvider v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NNotificationProvider>
</template>