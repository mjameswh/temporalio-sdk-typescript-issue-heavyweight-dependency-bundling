import { ExampleModel, ExampleEnum, extractProperty } from "../api/index";

export function exampleWorkflow() {
  const foo: ExampleModel = { someProperty: ExampleEnum.a };
  return extractProperty(foo);
}
