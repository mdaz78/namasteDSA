/**
 * For n = 4
 * "  * * * *
 * "  * * * *
 * "  * * * *
 * "  * * * *
 */

const pattern1 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
      row += "* ";
    }

    console.log(row);
  }
};

console.log("#############");
pattern1(4);
console.log("#############");

/**
 *
 * for n = 4
 *
 * ```
 * *
 * **
 * ***
 * ****
 * ```
 *
 */

const pattern2 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row += "* ";
    }

    console.log(row);
  }
};

console.log("#############");
pattern2(4);
console.log("#############");

/**
 * n = 5
 *
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 4
 * 1 2 3 4 5
 */
const pattern3 = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = [];

    for (let j = 1; j <= i; j++) {
      row.push(j);
    }

    console.log(row.join(" "));
  }
};

console.log("#############");
pattern3(5);
console.log("#############");

/**
 * n = 5
 *
 * 1
 * 2 2
 * 3 3 3
 * 4 4 4 4
 * 5 5 5 5 5
 */
const pattern4 = (n) => {
  for (let i = 1; i <= n; i++) {
    let rows = "";

    for (let j = 1; j <= i; j++) {
      rows += `${i} `;
    }

    console.log(rows);
  }
};

console.log("#############");
pattern4(5);
console.log("#############");

/**
 * n = 5
 * 1 2 3 4 5
 * 1 2 3 4
 * 1 2 3
 * 1 2
 * 1
 */
const pattern5 = (n) => {
  for (let i = 0; i < n; i++) {
    let rows = "";

    for (let j = 0; j < n - i; j++) {
      rows += `${j + 1} `;
    }

    console.log(rows);
  }
};

console.log("#############");
pattern5(5);
console.log("#############");

/**
 * n = 5
 *         *
 *       * *
 *     * * *
 *   * * * *
 * * * * * *
 */
const pattern6 = (n) => {
  for (let i = 1; i <= n; i++) {
    let rows = "";

    for (let j = 1; j <= n; j++) {
      if (j <= n - i) {
        rows += "  ";
      } else {
        rows += "* ";
      }
    }

    console.log(rows);
  }
};

console.log("#############");
pattern6(5);
console.log("#############");

/**
 * n = 6
 *
 * 1
 * 1 0
 * 1 0 1
 * 1 0 1 0
 * 1 0 1 0 1
 * 1 0 1 0 1 0
 */
const pattern7 = (n) => {
  for (let i = 0; i < n; i++) {
    rows = " ";

    for (j = 0; j <= i; j++) {
      if (j % 2 === 0) {
        rows += `${1} `;
      } else {
        rows += `${0} `;
      }
    }

    console.log(rows);
  }
};

console.log("#############");
pattern7(6);
console.log("#############");

/**
 * n = 5
 * 1
 * 0 1
 * 0 1 0
 * 1 0 1 0
 * 1 0 1 0 1
 */
const pattern8 = (n) => {
  let toggle = 1;

  for (let i = 0; i < n; i++) {
    let row = " ";

    for (let j = 0; j <= i; j++) {
      row += toggle + " ";

      toggle = toggle === 1 ? 0 : 1;
    }

    console.log(row);
  }
};

console.log("#############");
pattern8(6);
console.log("#############");
