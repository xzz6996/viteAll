// 声明文件以 .d.ts结尾,一般放置在主目录下


// 全局声明 - 通过declare可以标注js全局变量的类型,声明之后 其他任意文件可以访问到
declare const globalBoolean: Boolean


// declare namespace (namespace后面代表是一个对象)
declare namespace golbalName {
    const name: String
    const age: Number
}

