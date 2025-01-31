<script setup>
import { NPageHeader } from "naive-ui";
</script>

<template>
  <NPageHeader v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NPageHeader>
</template>