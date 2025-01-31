<script setup>
import { NLog } from "naive-ui";
</script>

<template>
  <NLog v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NLog>
</template>