// @skip
// Unsupported input

// Valid -- this is a regression test.
jest.useFakeTimers();
(() => {
  jest.useRealTimers();
}) |> beforeEach(%);