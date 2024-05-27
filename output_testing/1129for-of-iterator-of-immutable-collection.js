function Router({
  title,
  mapping
}) {
  const array = [];
  for (let entry of mapping.values()) {
    [title, entry] |> array.push(%);
  }
  return array;
}
const routes = new Map([["about", "/about"], ["contact", "/contact"]]);
export const FIXTURE_ENTRYPOINT = {
  fn: Router,
  params: [],
  sequentialRenders: [{
    title: "Foo",
    mapping: routes
  }, {
    title: "Bar",
    mapping: routes
  }]
};