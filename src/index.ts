export function helloWorld(hello: string, world: string) {
  const a = 'hello';
  const result = `${hello} ${world}`;
  console.log(result);
  return result;
}

helloWorld('hello', 'world');
