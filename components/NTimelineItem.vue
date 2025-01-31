<script setup>
import { NTimelineItem } from "naive-ui";
</script>

<template>
  <NTimelineItem v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NTimelineItem>
</template>