// const fs = require("fs");
// fs.readFile("./readme.txt", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
//   console.log(data.toString());
// });

//프로미스 형식으로 바꿔줌
const fs = require("fs").promises;

fs.readFile("./readme.txt")
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });

fs.writeFile("./writeme.txt", "글이 입력됩니다");
