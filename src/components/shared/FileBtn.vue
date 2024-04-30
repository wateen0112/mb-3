<template>
<div class="flex justify-start items-end">

  <div @change="handleFileChange" class="cursor-pointer relative custom-file-input" :class="'flex rounded-lg  bg-[#F3F5FB] cursor-pointer justify-center items-center w-[80px] h-[80px]'">
    <img class="cursor-pointer" :src="Camera" alt="">
    <input  
    accept=".png,.jpg,.gif,.svg"
    type="file" class="w-[80px] h-[80px] top-0 left-0 z-30 opacity-0 cursor-pointer absolute"  ref="fileInput" />
  </div>
  <div    v-if="fileName!==''"  class="relative px-2">
<VIcon
@click="()=>{
fileName=''
  $emit('update:modelValue',null)
}"
class="cursor-pointer">mdi-close</VIcon>
    {{ fileName}}

</div>
</div>

</template>

<script setup lang="ts">
import Camera from '@/assets/images/svg/camera-icon1.svg'
const fileInput = ref();
const fileName = ref('')
const props = defineProps({
  class: {
    type: String,
    default: "bg-primary w-[50px] h-[50px] rounded-full",
  },
  modelValue: {
    type: File,
    default: null,
    required: true,
  },
  label: {
    type: String,
    default: "Choose File",
  },
  icon: {
    type: String,
    default: "mdi-plus",
  },

  color: {
    type: String,
    default: "primary",
  },
});
const emit = defineEmits(["update:modelValue",'update:fileName']);
function handleFileChange() {
  const file = fileInput.value.files[0];
  
  console.log( file.name)
  emit("update:modelValue", file);
  fileName.value = file.name;
}
</script>

<style>
.custom-file-input .button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  min-width: 30px !important;
  padding: 0 16px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;

  border: none;

  cursor: pointer;
}

.custom-file-input .icon {
  font-size: 24px;
}

.custom-file-input .hidden {
  display: none;
}
</style>
