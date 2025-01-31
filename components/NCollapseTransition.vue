<script setup>
import { NCollapseTransition } from "naive-ui";
</script>

<template>
  <NCollapseTransition v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NCollapseTransition>
</template>