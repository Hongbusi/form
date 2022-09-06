import type { FormRules } from 'element-plus'

// TODO 'autocomplete' | 'cascader'
type FormType = 'input' | 'input-number' | 'radio' | 'checkbox' | 'switch' | 'select' | 'time-select' | 'time-picker' | 'date-picker' | 'tree-select'

export interface FormItem {
  label: string // 标签文本
  key: string // model 的键名
  type: FormType // 组件的类型
  size: 'small' | 'default' | 'large' // 组件的尺寸
  rules?: FormRules // 表单验证规则
  placeholder?: any // 输入框占位文本
  defaultValue?: any // 默认值
  // 针对 select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
}

export interface Form {
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
  formItems: FormItem[]
}
