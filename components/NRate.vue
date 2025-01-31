<script setup>
import { NRate } from "naive-ui";
</script>

<template>
  <NRate v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NRate>
</template>