<script setup>
import { NInfiniteScroll } from "naive-ui";
</script>

<template>
  <NInfiniteScroll v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NInfiniteScroll>
</template>