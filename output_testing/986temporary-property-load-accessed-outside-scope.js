function Component(props) {
  const maybeMutable = new MaybeMutable();
  let x = props.value;
  return [x, maybeMutable |> maybeMutate(%)];
}