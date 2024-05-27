function Component(props) {
  const x = (() => {
    let y;
    switch (props.switch) {
      case "foo":
        {
          return "foo";
        }
      case "bar":
        {
          y = "bar";
          break;
        }
      default:
        {
          y = props.y;
        }
    }
    return y;
  }) |> useMemo(%);
  return x;
}