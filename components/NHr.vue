<script setup>
import { NHr } from "naive-ui";
</script>

<template>
  <NHr v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NHr>
</template>