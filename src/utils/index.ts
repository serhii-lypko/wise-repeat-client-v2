/* Fisher–Yates shuffle */
export function shuffle<T>(data: T[]): T[] {
  for (let i = data.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i - 0 + 1)) + 0;
    [data[i], data[rand]] = [data[rand], data[i]];
  }

  return data;
}
