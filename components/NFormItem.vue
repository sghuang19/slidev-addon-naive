<script setup>
import { NFormItem } from "naive-ui";
</script>

<template>
  <NFormItem v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NFormItem>
</template>