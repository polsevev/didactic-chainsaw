function Component() {
  let x = [];
  let items = [0, 1, 2];
  for (const ii of items) {
    ii * 2 |> x.push(%);
  }
  return x;
}