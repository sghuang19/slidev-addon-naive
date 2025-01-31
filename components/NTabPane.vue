<script setup>
import { NTabPane } from "naive-ui";
</script>

<template>
  <NTabPane v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NTabPane>
</template>