<script setup>
import { NInputGroup } from "naive-ui";
</script>

<template>
  <NInputGroup v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NInputGroup>
</template>