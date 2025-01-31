<script setup>
import { NCol } from "naive-ui";
</script>

<template>
  <NCol v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NCol>
</template>