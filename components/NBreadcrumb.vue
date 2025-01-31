<script setup>
import { NBreadcrumb } from "naive-ui";
</script>

<template>
  <NBreadcrumb v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NBreadcrumb>
</template>