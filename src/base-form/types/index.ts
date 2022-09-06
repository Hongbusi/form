type FormType = 'input' | 'password' | 'select' | 'datepicker'

export interface FormItem {
  field: string
  type: FormType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对 select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
  isHidden?: false
}

export interface IForm {
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
  formItems: FormItem[]
}
