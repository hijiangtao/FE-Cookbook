# TypeScript

#### 1. interface 和 type 的区别

答：核心不同点在于 type 不能重新再被打开添加新属性。

**相同点**

1. 都可以描述一个对象或者函数；
2. 都允许拓展（extends）：interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。 虽然效果差不多，但是两者语法不同。

interface extends interface

```
interface Name { 
  name: string; 
}
interface User extends Name { 
  age: number; 
}
```

type extends type

```
type Name = { 
  name: string; 
}
type User = Name & { age: number  };
```

interface extends type

```
type Name = { 
  name: string; 
}
interface User extends Name { 
  age: number; 
}
```

type extends interface

```
interface Name { 
  name: string; 
}
type User = Name & { 
  age: number; 
}
```

**不同点**

type 可以而 interface 不行

1. type 可以声明基本类型别名，联合类型，元组等类型
2. type 语句中还可以使用 typeof 获取实例的类型进行赋值

```typescript
// 基本类型别名
type Name = string

// 联合类型
interface Dog {
    wong();
}
interface Cat {
    miao();
}

type Pet = Dog | Cat

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]

// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement('div');
type B = typeof div
```

interface 可以而 type 不行

1. interface 能够声明合并

```typescript
interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

/*
User 接口为 {
  name: string
  age: number
  sex: string 
}
*/
```

#### 2. 介绍一下类型守卫 Type Guard 与使用

类型守卫与普通函数的区别在于：

1. 普通函数

```
function isPerson(obj: any): boolean {
  // 具体实现，需要返回一个boolean值
}
```

2. Type Guard 断言函数

```
function isPerson(obj: any): obj is Person {
  // 具体实现，返回true表示obj经过我们验证是Person类型，返回false表示obj经过我们验证不是Person类型
}
```

简单写一个 Type Guard

```typescript
interface Person {
  name: string;
  age: number;
}

function isPerson(obj: any): obj is Person {
  return 'name' in obj && 'age' in obj
}
```
