<script setup>
import { NDrawerContent } from "naive-ui";
</script>

<template>
  <NDrawerContent v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NDrawerContent>
</template>