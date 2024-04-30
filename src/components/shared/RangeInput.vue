<template>
  <div class="w-full relative h-[40px]">
    <span
      :id="`min-label${id}`"
      class="text-center absolute top-[10px] text-primary"
      :style="`left:80%`"
      ><span class="mx-1">from</span> {{ formatHour(value[0]) }}</span
    >
    <span
      :id="`max-label${id}`"
      class="absolute top-[10px] text-primary"
      :style="`left: 5%`"
    >
      <span class="mx-1">to</span>{{ formatHour(value[1]) }}</span
    >
  </div>
  <div :id="`item${id}`">
    <v-range-slider
      v-model="value"
      :thumb-label="false"
      :min="0"
      :max="24"
      :step="step"
      :show-ticks="true"
      @input="updateRange"
    >
      <template #label> {{ formatHour(value[0]) }} - Custom Min Label </template>
      <template #label-max="{ value }">
        {{ formatHour(value[1]) }} - Custom Max Label
      </template>
    </v-range-slider>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps({
  id: {
    type: [Number, String],
    default: 0,
  },
  minValue: {
    type: String,
    default: "12:00",
  },
  maxValue: {
    type: String,
    default: "12:00",
  },
  min: {
    type: Number,
    default: 0, // set default to 10 AM
  },
  max: {
    type: Number,
    default: 24, // set default to 3 AM (next day)
  },
  step: {
    type: Number,
    default: 0.5,
  },
});

const emit = defineEmits(["update:max-value", "update:min-value"]);
const minXPos = ref("5%");
const maxXPos = ref("90%");
const minHour = ref(props.min);
const maxHour = ref(props.max - 24); // subtract 24 hours to adjust for next day
const value = ref([minHour.value, maxHour.value]);

const updateRange = () => {
  const [min, max] = value.value;
  console.log(`Min: ${formatHour(min)}, Max: ${formatHour(max)}`);
  // perform any other actions needed with updated range values
};

const formatHour = (hour: number): string => {
  const amPm = hour >= 12 ? "PM" : "AM";
  const displayHour = Math.floor(hour) % 12 || 12;
  const halfHour = hour - Math.floor(hour) > 0 ? "30" : "00";
  return `${Math.floor(displayHour)}:${halfHour} ${amPm}`;
};
const regularTimeFormat = (hour: number): string => {
  const displayHour = Math.floor(hour);
  const halfHour = hour - Math.floor(hour) > 0 ? "30" : "00";
  return `${Math.floor(displayHour)}:${halfHour} `;
};
const initedValue = ref(false);
onMounted(() => {
  const thumbs = document.querySelectorAll(` #item${props.id} .v-slider-thumb__ripple`);

  minXPos.value =
    Math.floor(thumbs[0].getBoundingClientRect().x + window.scrollX - 40).toString() +
    "px";
  maxXPos.value = Math.floor(window.scrollX - 30).toString() + "px";

  //converting clocks from string to nmbers
  let minVal = props.minValue?.split(":");
  let maxVal = props.maxValue?.split(":");
  let minValItem = parseInt(minVal[0]) + parseInt(minVal[1]) / 60;
  let maxValItem = parseInt(maxVal[0]) + parseInt(maxVal[1]) / 60;
  value.value = [minValItem, maxValItem];
  //converting done  . . .

  // const thumbs = document.querySelectorAll(` #item${props.id} .v-slider-thumb__ripple`);
  // maxXPos.value =
  //   Math.floor(thumbs[1].getBoundingClientRect().x + window.scrollX - 20).toString() +
  //   "px";
});
watch(value, () => {
  emit(
    "update:min-value",
    regularTimeFormat(value.value[0]).split("AM")[0].split("PM")[0]
  );
  emit(
    "update:max-value",
    regularTimeFormat(value.value[1]).split("AM")[0].split("PM")[0]
  );
});
</script>
