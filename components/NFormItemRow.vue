<script setup>
import { NFormItemRow } from "naive-ui";
</script>

<template>
  <NFormItemRow v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NFormItemRow>
</template>