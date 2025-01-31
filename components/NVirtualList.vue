<script setup>
import { NVirtualList } from "naive-ui";
</script>

<template>
  <NVirtualList v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NVirtualList>
</template>