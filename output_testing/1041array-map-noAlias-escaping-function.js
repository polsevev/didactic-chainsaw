function Component(props) {
  const f = item => item;
  const x = f |> [...props.items].map(%); // `f` doesn't escape here...
  return [x, f]; // ...but it does here so it's memoized
}
export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{
    items: [{
      id: 1
    }]
  }],
  isComponent: false
};