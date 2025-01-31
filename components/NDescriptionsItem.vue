<script setup>
import { NDescriptionsItem } from "naive-ui";
</script>

<template>
  <NDescriptionsItem v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NDescriptionsItem>
</template>