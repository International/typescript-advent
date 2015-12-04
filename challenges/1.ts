export function detect_level(input: string): number {
  var level = 0;
  for (var ch of input) {
    if (ch === "(") {
      level += 1;
    } else if (ch === ")") {
      level -= 1;
    }
  }
  return level;
}
