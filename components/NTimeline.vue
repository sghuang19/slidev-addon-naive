<script setup>
import { NTimeline } from "naive-ui";
</script>

<template>
  <NTimeline v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NTimeline>
</template>