// 映射类型
interface Obj2 {
  a: string
  b: number
  c: boolean
}
// 所有属性只读
type ReadonlyObj = Readonly<Obj2>

// 所有属性可选
type PartialObj = Partial<Obj2>

// 抽取obj的子集
type PickObj = Pick<Obj, 'a' | 'b'>

// 创立新的属性 非同态
type RecordObj = Record<'x' | 'y', Obj2>