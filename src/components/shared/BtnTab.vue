<script setup lang="ts">
const props = defineProps(['modelValue','content','value','rounded','variant'])
const emit = defineEmits(['update:modalValue'])
</script>
<template>
  <VBtn  :class="{'rounded-xl':rounded}" class="capitalize  shadow-none"  :variant="variant" @click="$emit('update:modelValue',value)" :color="value===modelValue?'primary':'gray-400'"  value="all">{{content}}</VBtn>
</template>
