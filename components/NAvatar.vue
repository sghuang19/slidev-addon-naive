<script setup>
import { NAvatar } from "naive-ui";
</script>

<template>
  <NAvatar v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NAvatar>
</template>