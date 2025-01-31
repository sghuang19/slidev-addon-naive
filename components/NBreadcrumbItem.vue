<script setup>
import { NBreadcrumbItem } from "naive-ui";
</script>

<template>
  <NBreadcrumbItem v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NBreadcrumbItem>
</template>