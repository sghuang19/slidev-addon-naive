<script setup>
import { NMention } from "naive-ui";
</script>

<template>
  <NMention v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NMention>
</template>