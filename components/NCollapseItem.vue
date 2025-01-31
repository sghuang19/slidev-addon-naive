<script setup>
import { NCollapseItem } from "naive-ui";
</script>

<template>
  <NCollapseItem v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NCollapseItem>
</template>