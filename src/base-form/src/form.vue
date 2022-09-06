<script setup lang="ts">
import { ref, watch } from 'vue'
import type { IFormItem } from '../types'

interface Props {
  modelValue: Recordable
  labelWidth?: string
  itemStyle?: Recordable
  colLayout?: Recordable
  formItems?: IFormItem[]
}

const props = withDefaults(defineProps<Props>(), {
  labelWidth: '100px',
  itemStyle: () => ({ padding: '10px 40px' }),
  colLayout: () => ({ xl: 6, lg: 8, md: 12, sm: 24, xs: 24 }),
  formItems: () => ([])
})

const emit = defineEmits(['update:modelValue'])

const formData = ref({ ...props.modelValue })

watch(
  formData,
  (newValue) => {
    emit('update:modelValue', newValue)
  },
  { deep: true }
)
</script>

<template>
  <div class="h-form">
    <div class="header">
      <slot name="header" />
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item v-if="!item.isHidden" :label="item.label" :rules="item.rules" :style="itemStyle">
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                  style="width: 100%"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>
