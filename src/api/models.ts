export interface ExampleModel {
  someProperty: ExampleEnum;
}

export enum ExampleEnum {
  a = 1,
  b = 2,
}

export function extractProperty(obj: ExampleModel) {
  return obj.someProperty;
}
