import type { FormRules } from 'element-plus'

// TODO 'autocomplete' | 'cascader'
type FormType = 'input' | 'input-number' | 'radio' | 'checkbox' | 'switch' | 'select' | 'time-select' | 'time-picker' | 'date-picker' | 'tree-select'

export interface FormItem {
  label: string // 标签文本
  key: string // model 的键名
  type: FormType // 组件的类型
  size?: 'small' | 'default' | 'large' // 组件的尺寸
  rules?: FormRules // 表单验证规则
  placeholder?: any // 输入框占位文本
  defaultValue?: any // 默认值
  options?: any[] // 针对 radio、checkbox、select、tree-select
  asyncOptions?: () => Promise<any[]> // 列表异步获取配置项的方法
  otherOptions?: any // 针对组件库提供的其他属性
  watchKey?: string | string[] // 需要监听的 key
  watchCallBack?: () => Promise<any[]> // 启动监听的 key 发生改变时的回调函数
}

export interface Form {
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
  formItems: FormItem[]
}
