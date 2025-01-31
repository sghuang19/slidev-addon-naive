<script setup>
import { NRow } from "naive-ui";
</script>

<template>
  <NRow v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NRow>
</template>