// T extends U ? x : y
type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object'

// type T1 = "string"
type T1 = TypeName<string>
// type T1 = "string"
type T2 = TypeName<string[]>

// (A | B) extends U ? X :Y
// type T3 = "string" | "object"
type T3 = TypeName<string | string[]>

// 可以类型过滤
type Diff<T, U> = T extends U ? never : T

// type T4 = "b" | "c"
type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>

// 过滤undefind null
type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null>

// 内置
// Exclude<T, U> 与前面diff的实现一样 剔除T中可以给U的类型
// NonNullable<T>
// Extract<T, U> 抽取
type T6 = Extract<'a' | 'b' | 'c', 'a' | 'e'>

// ReturnType<T>
// 函数返回类型
type T7 = ReturnType<() => string>
