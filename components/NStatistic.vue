<script setup>
import { NStatistic } from "naive-ui";
</script>

<template>
  <NStatistic v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NStatistic>
</template>