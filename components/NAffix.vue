<script setup>
import { NAffix } from "naive-ui";
</script>

<template>
  <NAffix v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NAffix>
</template>