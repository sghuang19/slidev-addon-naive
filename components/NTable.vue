<script setup>
import { NTable } from "naive-ui";
</script>

<template>
  <NTable v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NTable>
</template>