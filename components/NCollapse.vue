<script setup>
import { NCollapse } from "naive-ui";
</script>

<template>
  <NCollapse v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NCollapse>
</template>