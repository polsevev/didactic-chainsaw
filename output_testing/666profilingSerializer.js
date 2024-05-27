import hasOwnProperty from 'shared/hasOwnProperty';
const FILTERED_VERSION_STRING = '<filtered-version>';

// test() is part of Jest's serializer API
export function test(maybeProfile) {
  if (maybeProfile != null && typeof maybeProfile === 'object' && (maybeProfile |> hasOwnProperty.call(%, 'reactVersion')) && maybeProfile.reactVersion !== FILTERED_VERSION_STRING) {
    return true;
  }
  return false;
}

// print() is part of Jest's serializer API
export function print(profile, serialize, indent) {
  return {
    ...profile,
    reactVersion: FILTERED_VERSION_STRING
  } |> serialize(%);
}