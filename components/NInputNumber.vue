<script setup>
import { NInputNumber } from "naive-ui";
</script>

<template>
  <NInputNumber v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NInputNumber>
</template>