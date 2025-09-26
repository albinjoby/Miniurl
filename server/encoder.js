export default function base62Encoder(number) {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  if (number === 0) return "0"; // handle 0 case
  while (number > 0) {
    result = chars[number % 62] + result;
    number = Math.floor(number / 62);
  }
  return result; // return string as-is
}