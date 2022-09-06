// 'autocomplete' | 'cascader'
type FormType = 'input' | 'input-number' | 'radio' | 'checkbox' | 'switch' | 'select' | 'time-select' | 'tree-select' | 'time-picker' | 'date-picker'

export interface FormItem {
  label: string
  prop: string
  type: FormType
  rules?: any[]
  placeholder?: any
  // 针对 select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
}

export interface IForm {
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
  formItems: FormItem[]
}
