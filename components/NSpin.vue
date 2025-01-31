<script setup>
import { NSpin } from "naive-ui";
</script>

<template>
  <NSpin v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NSpin>
</template>