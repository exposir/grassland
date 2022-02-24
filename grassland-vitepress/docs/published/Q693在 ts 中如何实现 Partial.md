实现 `Partial`，使得 Object 所有的属性变为可选属性。

> PS: `Partial` 已经在 TS 中原生实现，见文档: <https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype>

``` ts
type User = {
  id: number;
  age: number;
  name: string;
}

// Output:
// type PartialUser = {
//   id?: number | undefined;
//   age?: number | undefined;
//   name?: string | undefined;
// }
type PartialUser = Partial<User>
```

以下是使用案例

``` ts
interface Todo {
  title: string;
  description: string;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
 
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```