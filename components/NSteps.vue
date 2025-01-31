<script setup>
import { NSteps } from "naive-ui";
</script>

<template>
  <NSteps v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NSteps>
</template>