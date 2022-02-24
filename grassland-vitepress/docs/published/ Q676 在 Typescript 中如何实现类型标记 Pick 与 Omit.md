有以下测试用例

``` ts
interface User {
  id: number;
  age: number;
  name: string;
};

// 相当于: type PickUser = { age: number; name: string; }
type OmitUser = Omit<User, "id">

// 相当于: type PickUser = { id: number; age: number; }
type PickUser = Pick<User, "id" | "age">
```