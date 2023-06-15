//예외처리하기
setInterval(() => {
  console.log("시작");
  try {
    throw new Error("서버고장내는 에러 뱉기");
  } catch (err) {
    console.error(err);
  }
}, 1000);
