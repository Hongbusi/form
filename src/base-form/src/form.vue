<script setup lang="ts">
import { ref, watch } from 'vue'
import type { FormItem } from '../types'
import type { Recordable } from '~/types'

interface Props {
  modelValue: Recordable
  labelWidth?: string
  itemStyle?: Recordable
  colLayout?: Recordable
  formItems?: FormItem[]
}

const props = withDefaults(defineProps<Props>(), {
  labelWidth: '80px',
  itemStyle: () => ({ padding: '10px 40px' }),
  colLayout: () => ({ xl: 6, lg: 8, md: 12, sm: 24, xs: 24 }),
  formItems: () => ([])
})

// const emit = defineEmits(['update:modelValue'])

// const formData = ref({ ...props.modelValue })

// watch(
//   formData,
//   (newValue) => {
//     emit('update:modelValue', newValue)
//   },
//   { deep: true }
// )

const formOptions = ref<FormItem[]>([])

function init() {
  if (!props.formItems)
    return
  for (const item of props.formItems)
    mixinData(item)

  // TODO rules watch
}

init()

function mixinData(formItem: FormItem) {
  formItem.size = formItem.size || 'small'
  formOptions.value.push(formItem)
}
</script>

<template>
  <el-form :label-width="labelWidth">
    <el-row>
      <template v-for="item in formItems" :key="item.label">
        <el-col v-bind="colLayout">
          <el-form-item :label="item.label" :rules="item.rules" :style="itemStyle">
            <template v-if="item.type === 'input'">
              <el-input
                v-bind="item.otherOptions"
                v-model="formData[`${item.key}`]"
                :placeholder="item.placeholder || `请输入${item.label}`"
              />
            </template>

            <template v-else-if="item.type === 'input-number'">
              <el-input-number
                v-bind="item.otherOptions"
                v-model="formData[`${item.key}`]"
              />
            </template>

            <template v-else-if="item.type === 'radio'">
              <el-radio-group
                v-bind="item.otherOptions"
                v-model="formData[`${item.key}`]"
              >
                <el-radio
                  v-for="option in item.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </el-radio-group>
            </template>

            <template v-else-if="item.type === 'checkbox'">
              <el-checkbox-group
                v-bind="item.otherOptions"
                v-model="formData[`${item.key}`]"
              >
                <el-checkbox
                  v-for="option in item.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </el-checkbox-group>
            </template>

            <template v-else-if="item.type === 'switch'">
              <el-switch
                v-bind="item.otherOptions"
                v-model="formData[`${item.key}`]"
              />
            </template>

            <template v-else-if="item.type === 'select'">
              <el-select
                v-bind="item.otherOptions"
                v-model="formData[`${item.key}`]"
                :placeholder="item.placeholder || `请选择${item.label}`"
              >
                <el-option
                  v-for="option in item.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
            </template>

            <template v-else-if="item.type === 'time-select'">
              <el-time-select
                v-bind="item.otherOptions"
                v-model="formData[`${item.key}`]"
                :placeholder="item.placeholder || `请选择${item.label}`"
              />
            </template>

            <template v-else-if="item.type === 'time-picker'">
              <el-time-picker
                v-bind="item.otherOptions"
                v-model="formData[`${item.key}`]"
                :placeholder="item.placeholder || `请选择${item.label}`"
              />
            </template>

            <template v-else-if="item.type === 'date-picker'">
              <el-date-picker
                v-bind="item.otherOptions"
                v-model="formData[`${item.key}`]"
                :placeholder="item.placeholder || `请选择${item.label}`"
              />
            </template>

            <template v-else-if="item.type === 'tree-select'">
              <el-tree-select
                v-bind="item.otherOptions"
                v-model="formData[`${item.key}`]"
                :placeholder="item.placeholder || `请选择${item.label}`"
                :data="item.options"
              />
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>
