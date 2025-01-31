<script setup>
import { NTree } from "naive-ui";
</script>

<template>
  <NTree v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NTree>
</template>