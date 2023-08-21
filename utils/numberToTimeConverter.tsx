export function numberToTime(second: number) {
  let minute = Math.floor(second / 60);
  let minuteLeft = second % 60;

  let minuteStr = minute.toString().padStart(2, '0');
  let secondStr = minuteLeft.toString().padStart(2, '0');

  return `${minuteStr}:${secondStr}`;
}
