<script setup lang="ts">
import Loading from "./Loading.vue";
const props = defineProps(["modelValue", "loading"]);
const emit = defineEmits(["update:modelValue"]);

const checked = ref(props.modelValue === true || props.modelValue === 1);
</script>
<template>
  <div>
    <div v-if="loading"><Loading /></div>
    <div v-else id="app">
      <label class="toggle-btn">
        <input
          :checked="checked"
          type="checkbox"
          @change="$emit('update:modelValue', checked)"
        />
        <span class="slider"></span>
      </label>
    </div>
  </div>
</template>
<style>
/* The container for the toggle button */
.toggle-btn {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

/* Hide the checkbox */
.toggle-btn input {
  display: none;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
}

/* Change the color of the slider when it's checked */
.slider::before {
  position: absolute;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  content: "";
  height: 22px;
  width: 22px;
  left: 1px;
  bottom: -1px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}

/* Move the slider to the right when checked */
input:checked + .slider {
  background-color: #28c76f;
}

input:checked + .slider::before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}
</style>
