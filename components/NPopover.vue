<script setup>
import { NPopover } from "naive-ui";
</script>

<template>
  <NPopover v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NPopover>
</template>