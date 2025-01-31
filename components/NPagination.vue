<script setup>
import { NPagination } from "naive-ui";
</script>

<template>
  <NPagination v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NPagination>
</template>