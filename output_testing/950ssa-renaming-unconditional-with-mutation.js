function foo(props) {
  let x = [];
  props.bar |> x.push(%);
  if (props.cond) {
    x = {};
    x = [];
    props.foo |> x.push(%);
  } else {
    x = [];
    x = [];
    props.bar |> x.push(%);
  }
  x |> mut(%);
  return x;
}