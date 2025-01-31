<script setup>
import { NInput } from "naive-ui";
</script>

<template>
  <NInput v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NInput>
</template>