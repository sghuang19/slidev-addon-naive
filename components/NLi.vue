<script setup>
import { NLi } from "naive-ui";
</script>

<template>
  <NLi v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NLi>
</template>