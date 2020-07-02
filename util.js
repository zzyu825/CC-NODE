const util = require('util');

// async function delay(duration = 1000) {
//     return duration;
// }

// delay(500).then(res => {
//     console.log(res);
// });

// const delayCallback = util.callbackify(delay);
// delayCallback(500, (err, d) => {
//     console.log(err, d);
// })

function delayCallback(duration, callback) {
    callback(null, duration);
}
const delay = util.promisify(delayCallback);
(async () => {
    const d = await delay(500);
    console.log(d)
})();

const obj1 = {
    a: 1,
    b: {
      c: 3,
      d: {
        e: 5
      }
    }
  };
  
  const obj2 = {
    a: 1,
    b: {
      c: 3,
      d: {
        e: 5,
        g: 6
      }
    }
  };
  console.log(util.isDeepStrictEqual(obj1, obj2));