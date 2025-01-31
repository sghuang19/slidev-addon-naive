<script setup>
import { NCalendar } from "naive-ui";
</script>

<template>
  <NCalendar v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NCalendar>
</template>