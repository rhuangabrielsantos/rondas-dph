export function validatePassword(password: string) {
  return password === process.env.REACT_APP_PASSWORD;
}
