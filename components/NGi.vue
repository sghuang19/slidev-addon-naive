<script setup>
import { NGi } from "naive-ui";
</script>

<template>
  <NGi v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NGi>
</template>