canvas((dot, dim) => {

    const RADIOUS = 300;
    const PETALS = RADIOUS / 16;
    const MAX_OFFSET = PETALS + 25;

    const STEPS = RADIOUS * 3;
    const R_STEP = MAX_OFFSET / (PETALS * 2);
    const deltaTheeta = dim.pi.double / STEPS;

    let incr = true;
    let count = 1;
    let radiusOffset = 0;

    for (let i = 0; i <= STEPS; i++) {

        const theta = i * deltaTheeta;

        if (incr) {
            radiusOffset += R_STEP;
            if (radiusOffset >= MAX_OFFSET) {
                radiusOffset = MAX_OFFSET;
                incr = false;
            }
        } else {
            radiusOffset -= R_STEP;
            if (radiusOffset <= 0) {
                radiusOffset = 0;
                incr = true;
            }
        }

        if (count % PETALS === 0) {
            incr = !incr;
        }

        count++;

        const r = RADIOUS + radiusOffset;

        const x = dim.width.half  + r * cos(theta);
        const y = dim.height.half + r * sin(theta);

        dot(x, y);
    }
});

const factorial = (n) => {
    if (n <= 1) return 1;
    let out = n;
    for (let x = n - 1; x > 0; x--) {
        out *= x;
    }
    return out;
};

const power = (n, e) => {
    let out = 1;
    for (let x = 0; x < e; x++) {
        out *= n;
    }
    return out;
};

const sin = (theta) => {
  let sum = 0;
  let sign = 1;
  for (let n = 0; n < 10; n++) {
    sum += sign * power(theta, 2 * n + 1) / factorial(2 * n + 1);
    sign = -sign;
  }
  return sum;
};

const cos = (theta) => {
  let sum = 0;
  let sign = 1;
  for (let n = 0; n < 10; n++) {
    sum += sign * power(theta, 2 * n) / factorial(2 * n);
    sign = -sign;
  }
  return sum;
};