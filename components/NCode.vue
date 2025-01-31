<script setup>
import { NCode } from "naive-ui";
</script>

<template>
  <NCode v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NCode>
</template>