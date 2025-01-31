<script setup>
import { NTabs } from "naive-ui";
</script>

<template>
  <NTabs v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NTabs>
</template>