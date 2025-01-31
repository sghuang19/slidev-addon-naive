<script setup>
import { NFormItemGridItem } from "naive-ui";
</script>

<template>
  <NFormItemGridItem v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NFormItemGridItem>
</template>