<script setup>
import { NInputGroupLabel } from "naive-ui";
</script>

<template>
  <NInputGroupLabel v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NInputGroupLabel>
</template>