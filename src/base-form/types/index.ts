// TODO 'autocomplete' | 'cascader'

type FormType = 'input' | 'input-number' | 'radio' | 'checkbox' | 'switch' | 'select' | 'time-select' | 'time-picker' | 'date-picker' | 'tree-select'

export interface FormItem {
  label: string
  key: string
  type: FormType
  rules?: any[]
  placeholder?: any
  defaultValue?: any
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
