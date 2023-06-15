const buffer = Buffer.from("버퍼로 바꿔질 애");
console.log("from()", buffer);
console.log("length", buffer.length);
console.log("toString", buffer.toString());

const array = [
  Buffer.from("띄엄"),
  Buffer.from("띄엄"),
  Buffer.from("띄어쓰기"),
];
//배열 안에 든 버퍼들을 하나로 합친다.
const buffer2 = Buffer.concat(array);
console.log(buffer2.toString());
//빈 버퍼를 생성한다.
const buffer3 = Buffer.alloc(5);
console.log(buffer3);
