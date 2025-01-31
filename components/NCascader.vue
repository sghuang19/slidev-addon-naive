<script setup>
import { NCascader } from "naive-ui";
</script>

<template>
  <NCascader v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NCascader>
</template>