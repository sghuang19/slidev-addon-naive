<script setup>
import { NAvatarGroup } from "naive-ui";
</script>

<template>
  <NAvatarGroup v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NAvatarGroup>
</template>