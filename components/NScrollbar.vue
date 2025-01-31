<script setup>
import { NScrollbar } from "naive-ui";
</script>

<template>
  <NScrollbar v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NScrollbar>
</template>