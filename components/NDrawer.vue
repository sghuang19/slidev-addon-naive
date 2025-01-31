<script setup>
import { NDrawer } from "naive-ui";
</script>

<template>
  <NDrawer v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NDrawer>
</template>