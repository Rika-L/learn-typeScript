// infer关键字

// 只能用于extends的子语句中

// 用法

interface User {
  name: string
  age: number
}

type PromiseType = Promise<User>

type GetUserType<T> = T extends Promise<infer U> ? GetUserType<U> : T

type T = GetUserType<PromiseType> // User
