<script setup>
import { NDescriptions } from "naive-ui";
</script>

<template>
  <NDescriptions v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NDescriptions>
</template>