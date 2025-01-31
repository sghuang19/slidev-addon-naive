<script setup>
import { NFloatButtonGroup } from "naive-ui";
</script>

<template>
  <NFloatButtonGroup v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NFloatButtonGroup>
</template>