<script setup>
import { NPopconfirm } from "naive-ui";
</script>

<template>
  <NPopconfirm v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NPopconfirm>
</template>