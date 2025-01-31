<script setup>
import { NTd } from "naive-ui";
</script>

<template>
  <NTd v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NTd>
</template>