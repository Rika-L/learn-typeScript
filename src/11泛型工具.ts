// 泛型工具

interface User {
  name: string
  age: number
  address: string
}

// Partial<T> 类型，将 T 的所有属性设为可选

type PartialUser = Partial<User>

// Required<T> 类型，将 T 的所有属性设为必选

type RequiredUser = Required<User>

// Pick<T, K> 类型，从 T 中挑选出 K 所指定的属性

type PickUser = Pick<User, 'name' | 'age'> // { name: string, age: number }

// Exclude<T, U> 类型，从 T 中排除 U 所指定的属性

type ExcludeUser = Exclude<User, 'address'> // { name: string, age: number }

// Omit<T, K> 类型，从 T 中排除 K 所指定的属性

type OmitUser = Omit<User, 'address'> // { name: string, age: number }

// Record<K, T> 类型，创建包含 K 类型属性的对象，每个属性的值都为 T 类型

type RecordUser = Record<'id', number> // { id: number }

// ReturnType<T> 类型，获取函数 T 的返回值类型

type ReturnTypeUser = ReturnType<() => User> // User
