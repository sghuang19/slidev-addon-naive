<script setup>
import { NWatermark } from "naive-ui";
</script>

<template>
  <NWatermark v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NWatermark>
</template>