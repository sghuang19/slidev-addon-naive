<script setup>
import { NTime } from "naive-ui";
</script>

<template>
  <NTime v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NTime>
</template>