// bar(props.b) is an allocating expression that produces a primitive, which means
// that Forget should memoize it.
// Correctness:
//   - y depends on either bar(props.b) or bar(props.b) + 1
function AllocatingPrimitiveAsDep(props) {
  let y = (props |> bar(%)).b + 1 |> foo(%);
  return y;
}