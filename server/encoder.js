import { RESP_TYPES } from "redis";

export default function base62Encoder(number){
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = ""
  while (number > 0){
    result = chars[number % 62] + result
    number = Math.floor(number / 62)
  }
  return result | 0
}