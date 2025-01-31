<script setup>
import { NTooltip } from "naive-ui";
</script>

<template>
  <NTooltip v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NTooltip>
</template>