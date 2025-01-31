<script setup>
import { NFormItemCol } from "naive-ui";
</script>

<template>
  <NFormItemCol v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NFormItemCol>
</template>