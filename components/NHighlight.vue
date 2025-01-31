<script setup>
import { NHighlight } from "naive-ui";
</script>

<template>
  <NHighlight v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NHighlight>
</template>