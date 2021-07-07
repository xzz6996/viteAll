// npx tsc hello.ts 将ts文件转换为js文件

// 类型注解 type annotaion -- 告诉TS变量是什么类型
// 类型推断 type inference -- TS会自动尝试分析变量的类型


// 基础类型 number string boolean num undefined void never object array 元组 enum any
// 高级基础 一般都是对object做更多的标注

interface Hello {
    name: string,
    age: number
}
let obj: Hello = { name: 'xzz', age: 18 }


// 联合类型 |    string | number | Boolean

// 交叉类型 &
interface AB { a: string }
interface BC { b: number }
const ab: AB = { a: '123' }
const bc: BC = { b: 123 }
const abcd: AB & BC = { ...ab, ...bc }

// 数组 -- 指定类型
let numbers: number[] = [1, 2, 3]
let arr: (number | string)[] = [1, 'x']

// 数组 -- 泛型 Array<元素类型>
let numberss: Array<number> = [1, 2, 3]
let arrs: Array<number | string> = [1, 'x']


// 元组(Tuple) -- 表示一个已知元素数量和类型的数组
let tuples: [number, string] = [1, '2']

// 枚举 -- 编译后被转换为对象,默认元素的值从0开始
enum Color { Red, Blue, Yellow }

// void -- 一般出现在函数里,用来标记函数没有返回值
function aa(): void {
    console.log(66)
}


// 高级 interface
// interface---声明对象
interface Person {
    name: string
    age: number
    readonly xzz: string // readonly 只读
    [propName: string]: any
    sex?: string   // ? 非必填 
}

let son: Person = {
    name: 'xzz',
    age: 36,
    xzz: '薛壮壮',
    height: '183cm'
}

// interface---声明函数  --- 传入值类型 : 返回值类型
interface onClick {
    (type: number, str: string): [number, string]
}
const myClick: onClick = (a, b) => {
    return [a, b]
}

// interface---声明类
interface Animal {
    food: string
    age: number
    fly(word: string): void
    eat(food: string): string
}

class dog implements Animal {
    food = '狗粮'
    age = 18
    fly(word: string) {
        console.log(word)
    }
    eat(food: string) {
        alert(food)
        return food
    }
}

// 类型别名 type

// 索引类型
type AAA = keyof { a: '12', b: 666 }

// 映射类型  Readonly--让属性都变为已读  Partial--让属性变为可选   Required--让属性变为必选

