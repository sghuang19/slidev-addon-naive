<script setup>
  import { NButton } from 'naive-ui'
</script>

<template>
    <n-button v-bind="$attrs">
        <slot></slot>
    </n-button>
</template>
