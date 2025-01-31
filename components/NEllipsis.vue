<script setup>
import { NEllipsis } from "naive-ui";
</script>

<template>
  <NEllipsis v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NEllipsis>
</template>