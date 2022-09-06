/**
 * 将连线格式的
 */
export type CamelizeSnakeString<T extends PropertyKey, Spliter extends string = '_', C extends string = ""> =
T extends string ? string extends T ? string :
T extends `${infer F}${Spliter}${infer R}` ?
CamelizeSnakeString<Capitalize<R>, Spliter, `${C}${F}`> : `${C}${T}` : T;
