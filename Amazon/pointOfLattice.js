function solution (Ax, Ay, Bx, By) {
  let dx = Bx - Ax
  let dy = By - Ay
  const gcd = findGCD(dx, dy)
  dx = dx / gcd
  dy = dy / gcd
  const Cy = By - dx
  const Cx = Bx - dy
  return `${Cx}, ${Cy}`
}

function findGCD (v1, v2) {
  const absV1 = Math.abs(v1)
  const absV2 = Math.abs(v2)
  if (absV1 === absV2) {
    return absV1
  } else {
    let a, b, t
    if (absV1 > absV2) {
      a = absV1
      b = absV2
    } else {
      a = absV2
      b = absV1
    }
    while (b !== 0) {
      t = b
      b = a % b
      a = t
    }
    return a
  }
}
