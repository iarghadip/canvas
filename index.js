canvas((dot, dim) => {

    const RADIOUS = 250;
    const STEPS = RADIOUS * 3;

    const deltaTheeta = dim.pi.double / STEPS;

    let incr = true;
    let count = 0;

    for (let i = 0; i <= STEPS; i++) {
        const theeta = i * deltaTheeta;
        if (incr) {
            if (count < 25) {
                count++;
            } else {
                incr = false;
                count--;
            }
        } else {
            if (count > 0) {
                count--;
            } else {
                incr = true;
                count++;
            }
        }

        const x = dim.width.half + count + RADIOUS * cos(theeta);
        const y = dim.height.half + count + RADIOUS * sin(theeta);
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