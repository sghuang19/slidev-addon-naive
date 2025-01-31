<script setup>
import { NGrid } from "naive-ui";
</script>

<template>
  <NGrid v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NGrid>
</template>