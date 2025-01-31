<script setup>
import { NGradientText } from "naive-ui";
</script>

<template>
  <NGradientText v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NGradientText>
</template>