<script setup lang="ts">
import BaseForm, { type Form } from '~/base-form'

const formData = ref({
  age: 12
})

const formConfig: Form = {
  labelWidth: '90px',
  itemLayout: {
    padding: '10px 40px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      prop: 'name',
      type: 'input',
      label: '用户名'
    },
    {
      prop: 'age',
      type: 'input-number',
      label: '年龄'
    },
    {
      prop: 'sex',
      type: 'radio',
      label: '性别',
      options: [
        { label: '男', value: 1 },
        { label: '女', value: 2 }
      ]
    },
    {
      prop: 'hobby',
      type: 'checkbox',
      label: '爱好',
      options: [
        { label: '打篮球', value: 'basketball' },
        { label: '唱歌', value: 'sing' },
        { label: '跳舞', value: 'dance' }
      ]
    },
    {
      prop: 'liveOnCampus',
      type: 'switch',
      label: '是否住校'
    },
    {
      prop: 'enable',
      type: 'select',
      label: '用户状态',
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 }
      ]
    },
    {
      prop: 'timeSelect',
      type: 'time-select',
      label: 'TimeSelect'
    },
    {
      prop: 'timePicker',
      type: 'time-picker',
      label: 'TimePicker'
    },
    {
      prop: 'createAt',
      type: 'date-picker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    },
    {
      prop: 'tree',
      type: 'tree-select',
      label: 'TreeSelect',
      options: [
        {
          value: '1',
          label: 'Level one 1',
          children: [
            {
              value: '1-1',
              label: 'Level two 1-1',
              children: [
                {
                  value: '1-1-1',
                  label: 'Level three 1-1-1'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
</script>

<template>
  <div>
    <BaseForm v-bind="formConfig" v-model="formData" />
  </div>
</template>
