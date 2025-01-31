<script setup>
import { NFloatButton } from "naive-ui";
</script>

<template>
  <NFloatButton v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NFloatButton>
</template>