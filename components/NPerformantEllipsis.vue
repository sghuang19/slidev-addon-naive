<script setup>
import { NPerformantEllipsis } from "naive-ui";
</script>

<template>
  <NPerformantEllipsis v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NPerformantEllipsis>
</template>