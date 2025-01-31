<script setup>
import { NDataTable } from "naive-ui";
</script>

<template>
  <NDataTable v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NDataTable>
</template>