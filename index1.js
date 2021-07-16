const a = [2, 3, -5, -2, 4];
    let max = a[0] + a[1];
    a.forEach((item, index) => {
      if (index != a.length - 1) {
        if (max < item * a[index + 1]) max = item * a[index + 1];
      }
    });
console.log(max);
