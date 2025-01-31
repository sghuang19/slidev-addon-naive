<script setup>
import { NListItem } from "naive-ui";
</script>

<template>
  <NListItem v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NListItem>
</template>