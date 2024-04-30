<script setup lang="ts">
interface Props {
  totalInput?: number
  default?: string
  modelValue:any
}

interface Emit {
  (e: 'updateOtp', val: string): void
}

const props = withDefaults(defineProps<Props>(), {
  totalInput: 4,
  default: '',
  modelValue:[]
})

const emit = defineEmits(['update:modelValue'])

const digits = ref<string[]>([])
const refOtpComp = ref<HTMLInputElement | null>(null)

digits.value = props.default.split('')

const defaultStyle = {
  style: 'max-width: 54px; text-align: center;',
}

// eslint-disable-next-line sonarjs/cognitive-complexity
const handleKeyDown = (event: KeyboardEvent, index: number) => {
  if (event.code !== 'Tab' && event.code !== 'ArrowRight' && event.code !== 'ArrowLeft')
    event.preventDefault()

  if (event.code === 'Backspace') {
    digits.value[index - 1] = ''

    if (refOtpComp.value !== null && index > 1) {
      const inputEl = refOtpComp.value.children[index - 2].querySelector('input')

      if (inputEl)
        inputEl.focus()
    }
  }
  const numberRegExp = /^([0-9])$/

  if (numberRegExp.test(event.key)) {
    digits.value[index - 1] = event.key

    if (refOtpComp.value !== null && index !== 0 && index < refOtpComp.value.children.length) {
      const inputEl = refOtpComp.value.children[index].querySelector('input')

      if (inputEl)
        inputEl.focus()
    }

  }


  emit('update:modelValue', digits.value.join(''))
}
</script>

<template>
  <div>
    
    <div
      ref="refOtpComp"
      class="otp field flex align-center justify-center gap-4 "
    >
      <VTextField

        v-for="i in props.totalInput"
        :key="i"
        :model-value="digits[i - 1]"
        class="msg-field "
        v-bind="defaultStyle"
        maxlength="1"
        @keydown="handleKeyDown($event, i)"
      />
    </div>
  </div>
</template>

<style lang="scss" >
.otp{
.v-field__field {
    border-radius: 90px !important;  
    padding: 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px !important;
  
  input {
   
    padding: 0.2rem 0 !important;
    font-size: 1.25rem;
    width: 40px;

    padding-top:0px !important;
    text-align: center;
  
   
  }
}
}
</style>
