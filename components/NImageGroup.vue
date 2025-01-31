<script setup>
import { NImageGroup } from "naive-ui";
</script>

<template>
  <NImageGroup v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NImageGroup>
</template>