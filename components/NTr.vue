<script setup>
import { NTr } from "naive-ui";
</script>

<template>
  <NTr v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NTr>
</template>