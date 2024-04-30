<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const props = defineProps(["countries", "validation", "modelValue", "regex"]);
const emit = defineEmits(["update:modelValue", "update:validation"]);
const toggleOpen = ref(false);
const selectedCountry = ref(props.countries[0]);
const phoneNumber = ref("");
const validNumber = ref(false);
const inputIsEmpty = ref(true);

const changeCountry = (coutry: any) => {
  selectedCountry.value = coutry;
  toggleOpen.value = false;
  //temporary changed
  // emit("update:modelValue", `${selectedCountry.value + phoneNumber}`);
  emit("update:modelValue", `${phoneNumber}`);
};
function matchRegex(regex: any, value: string) {
  return regex.test(value);
}
watch(phoneNumber, () => {
  inputIsEmpty.value = phoneNumber.value === "";
  validNumber.value = matchRegex(props.regex, props.modelValue);
  emit("update:validation", !inputIsEmpty.value && validNumber.value);
});
</script>
<template>
  <div class="flex justify-start international gap-1 border rounded-md">
    <div>
      <div
        @click="toggleOpen = true"
        class="countries-selector h-[40px] w-[80px] my-2 gap-2 px-1 flex justify-center items-center relative"
      >
        <img
          class="w-[40px] h-[30px] object-cover"
          :src="selectedCountry?.image"
          alt=""
        />
        <h4>{{ selectedCountry.value }}</h4>
      </div>

      <ul v-if="toggleOpen" class="absolute z-50 bg-surface">
        <li
          :class="{ 'bg-[#eee]': item.value === selectedCountry.value }"
          @click="changeCountry(item)"
          class="hover:bg-[#eee] cursor-pointer"
          v-for="item in countries"
        >
          <div
            class="py-1 w-[80px] my-2 gap-2 px-1 flex justify-center items-center relative w-full h-full"
          >
            <img class="w-[40px] h-[30px] object-cover" :src="item.image" alt="" />
            <h4>{{ item.value }}</h4>
          </div>
        </li>
      </ul>
    </div>
    <input
      @input="
        () => {
          $emit('update:modelValue', `${phoneNumber}`);
        }
      "
      v-model="phoneNumber"
      type="text"
      class="border-none h-[50px] outline-none w-full border py-2"
    />
  </div>
  <p class="text-error mt-3" v-if="inputIsEmpty">{{ $t("login.required") }}</p>
  <p class="text-error mt-3" v-if="!validNumber && !inputIsEmpty">
    {{ $t("login.errors.invalidPhone") }}
  </p>
</template>
<style scoped>
.countries-selector {
  border-right: 1px solid rgba(0, 0, 0, 0.342);
}
</style>
