import express, { Express, Request, Response } from "express";
import path, { join } from "path";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from "dotenv";
import multer from "multer";
import fs from "fs";

//폴더 없으면 폴더 생성
try {
  // fs.readFileSync("uploads");
  fs.accessSync("uploads");
} catch (error) {
  console.error("uploads 폴더가 없어서 생성한다");
  fs.mkdirSync("uploads");
}

dotenv.config();

const app: Express = express();
app.set("port", process.env.PORT || 3000); //값으로 포트 설정

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    morgan("dev");
  } else {
    morgan("dev")(req, res, next);
  }
});
app.use("/image", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //주소형식으로 데이터 보내는 방식, 폼전송은 주로 url-encoded방식을 주로 쓴다
app.use(cookieParser(process.env.COOKIE_SECRET)); //비밀키로 동봉
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET || "후후",
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);
// 요청과 응답 중간의 역할 미들웨어 만들자
app.use((req: Request, res: Response, next) => {
  console.log("모든 요청에 다 실행된다");
  next(); //다음 미들웨어로 넘어가라
});

app.get("/", (req: Request, res: Response) => {
  //   res.send("hello express");
  console.log("/요청에실행됨");

  res.sendFile(path.join(__dirname, "/index.html"));
});

app.use((err: Error, req: Request, res: Response, next: any) => {
  console.error(err);
  res.status(500).send(err.message);
});

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.get("/upload", (req, res) => {
  res.sendFile(path.join(__dirname, "multipart.html"));
});
app.post(
  "/upload",
  upload.single("image"),
  //   upload.fields([{ name: "image1" }, { name: "image2" }]),

  (req, res) => {
    console.log("req.file", req.file);
    console.log("req.body", req.body);
    res.send("ok");
  }
);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번포트에서 대기중");
});
