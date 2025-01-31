<script setup>
import { NFormItemGi } from "naive-ui";
</script>

<template>
  <NFormItemGi v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NFormItemGi>
</template>