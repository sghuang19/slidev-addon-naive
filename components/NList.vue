<script setup>
import { NList } from "naive-ui";
</script>

<template>
  <NList v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NList>
</template>