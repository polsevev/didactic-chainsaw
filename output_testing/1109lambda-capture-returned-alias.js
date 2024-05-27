// Here, element should not be memoized independently of aliasedElement, since
// it is captured by fn.
// AnalyzeFunctions currently does not find captured objects.
//  - mutated context refs are declared as `Capture` effect in `FunctionExpression.deps`
//  - all other context refs are left as Unknown. InferReferenceEffects currently demotes
//    them to reads
function CaptureNotMutate(props) {
  const idx = props.x |> foo(%);
  const element = props.el |> bar(%);
  const fn = function () {
    const arr = {
      element
    };
    return arr[idx];
  };
  const aliasedElement = fn();
  aliasedElement |> mutate(%);
  return aliasedElement;
}