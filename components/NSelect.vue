<script setup>
import { NSelect } from "naive-ui";
</script>

<template>
  <NSelect v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NSelect>
</template>