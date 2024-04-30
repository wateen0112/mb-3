<script setup lang="ts">
import { useLayouts } from "@core/composable/useLayout"
import { useScreen } from "@/composables";
import { useAppStore } from "@/stores/App";
import { useI18n } from "vue-i18n";

import { config } from "@/@layouts/config";
const appStore = useAppStore();
const { screenSize } = useScreen();
const { isLoading } = storeToRefs(appStore);
const router = useRouter();
const route = useRoute();

const { t } = useI18n();
const props = defineProps({
  inner: {
    type: Boolean,
    defaut: false,
  },
  sidebarWidth: {
    type: String,
    default: "30%",
  },
});
let arrPath = route.path.split("/").filter((item, index) => {
  return index !== 0;
});

const { sidebarOpend, modalOpened } = storeToRefs(appStore);

const isAppRtl = computed({
    get() {
      return config.app.isRtl.value
    },
    set(value: typeof config.app.isRtl.value) {
      config.app.isRtl.value = value
      localStorage.setItem(`${config.app.title}-isRtl`, value.toString())
      document.documentElement.setAttribute('dir', config.app.isRtl.value?'rtl':'ltr')
    },
  })
const closeAll = () => {
  appStore.closeModal();
  appStore.closeSidebar();
};
const mainStyle = `w-[${props.sidebarWidth}] p-3 overflow-auto min-w-[340px] fixed top-0 sidebar h-full z-50`;
</script>
<template>
  <div>
    <!-- <div v-if="isLoading" class="loading z-50"></div>
    <div
      v-if="isLoading"
      class="wrapper absolute z-40 top-0 left-0 w-full h-full flex justify-center items-center"
    ></div> -->
    <div
      v-if="modalOpened"
      class="z-50 modal absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      <div class="relative bg-white min-w-[300px] rounded-md">
        <div class="flex justify-end w=full p-2">
          <VBtn
            icon="mdi-close "
            class=""
            float
            size="36"
            @click="appStore.closeModal()"
          />
        </div>
        <slot name="modal"> </slot>
      </div>
    </div>
    <div
      @click="closeAll()"
      class="wrapper w-full z-40 hidden h-full absolute top-0 left-0"
    ></div>
    <Transition v-if="!isAppRtl" name="slide-fade">
      <VCard
        class="w-[30%]"
        v-if="sidebarOpend"
        :class="
          isAppRtl
            ? mainStyle + ' left-0 rounded-tr-xl rounded-br-xl'
            : mainStyle + ' right-0 rounded-tl-xl rounded-bl-xl '
        "
      >
        <slot name="sidebar"></slot
      ></VCard>
    </Transition>
    <Transition v-else name="slide-right-fade">
      <VCard
        v-if="sidebarOpend"
        class="w-[35%] p-3 overflow-auto min-w-[340px] fixed top-0 sidebar h-full z-50"
        :class="
          isAppRtl
            ? 'left-0 rounded-tr-xl rounded-br-xl'
            : 'right-0 rounded-tl-xl rounded-bl-xl '
        "
      >
        <slot name="sidebar"></slot
      ></VCard>
    </Transition>

    <div
      class="pb-2 bg-[#f8f7fa] px-10 w-full z-30 pt-10 pl-20 top-0 left-0 fixed flex justify-between items-center"
    >
      <div class="flex justify-center items-center gap-8">
        <VBtn
          @click="router.go(-1)"
          color="primary"
          variant="flat"
          :icon="isAppRtl ? 'tabler:arrow-right' : 'tabler:arrow-left'"
          size="large"
          class="rounded-lg shadow-lg"
        ></VBtn>

        <div class="flex">
          <h3 v-if="screenSize === 'sm'" class="capitalize lg:text-xl text-sm">
            {{
              $t(
                `routes.${
                  typeof parseInt(arrPath[arrPath.length - 1]) === "number"
                    ? arrPath[arrPath.length - 2]
                    : arrPath[arrPath.length - 1]
                }`
              ).includes("routes")
                ? typeof parseInt(arrPath[arrPath.length - 1]) === "number"
                  ? arrPath[arrPath.length - 2]
                  : arrPath[arrPath.length - 1]
                : $t(
                    `routes.${
                      typeof parseInt(arrPath[arrPath.length - 1]) === "number"
                        ? arrPath[arrPath.length - 2]
                        : arrPath[arrPath.length - 1]
                    }`
                  )
            }}
          </h3>
          <h3
            v-else
            class="capitalize lg:text-xl text-sm"
            v-for="(item, index) in arrPath"
          >
            {{ $t(`routes.${item}`).includes("routes") ? item : $t(`routes.${item}`) }}
            <VIcon
              v-if="index !== arrPath.length - 1"
              :icon="isAppRtl ? 'mdi-chevron-left' : 'mdi-chevron-right'"
            />
          </h3>
        </div>
      </div>
      <slot name="action-button"> </slot>
    </div>

    <div class="z-10 mt-16 lg:px-10">
      <div class="px-5">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.slide-right-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-right-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-right-fade-enter-from,
.slide-right-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
.wrapper {
  opacity: 1;
  pointer-events: auto;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgba(2, 2, 2, 0.3);
  backdrop-filter: blur(10px);
}

.loading {
  display: inline-block;
  width: 80px;
  height: 80px;
  z-index: 999999 !important;
  position: absolute;
  top: 30%;
  left: 46%;

  transform: translate(-40%, -50%);
}

.loading:after {
  content: " ";

  display: block;
  width: 80px;
  height: 80px;
  margin: 4px;
  border-radius: 50%;
  z-index: 99999999999999999;
  border: 4px solid #ff9e59;
  border-color: #ff9e59 transparent #ff9e59 transparent;
  animation: loading 1.2s linear infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
