
import { urlencoded } from "express";
import { CLIENT_RENEG_LIMIT } from "tls";
import { ConnectDB } from "./connectDB"
const express= require('express')
const {ApolloServer, gql} = require('apollo-server')
const cors =require('cors')
const bodyParser = require('body-parser')


let test :any[] = [] 
const typeDefs = gql`
  type Query {
    message: String
  }
  type Mutation{
createNCT :String


  }
`;

//리졸버는 특정 필드의 데이터를 반환하는 함수입니다. 스키마에 정의된 타입과 형태에 따라 데이터를 반환합니다.
const resolvers = {
    Query: {
      message: () => 'Hello World!테스트입니다-소유니가-'
    },
     Mutation: {
        createNCT : (arg:any)=>{
            const yo = {name:arg}
            test.push(yo ) 
            return test

        }
       
  }

}

  const server = new ApolloServer({ typeDefs, resolvers });

server.listen({port:4001}).then(({ url }:any) => {
  console.log(`Server ready at ${url}`);
});


const app = express()

ConnectDB().then(()=>{
    console.log("DB연결됨")
})



// async function ConnectDB() {
//    const connection= await mariadb.createConnection({
//         host: 'localhost',
//         user: 'mark',
//         password: '0802',
//         database: 'mark_house'
//      })
   
// //  con.query(`CREATE TABLE NCT (
// //         id INT AUTO_INCREMENT PRIMARY KEY,
// //         name VARCHAR(50) NOT NULL,
// //         email VARCHAR(100) NOT NULL,
// //         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// //       )`)
   
    
// }

// ConnectDB().then(()=>{
//     console.log("DB연결됨")
// })

//서버가 실행될 포트를 설정
// app.set('port',process.env.PORT || 4000)
// app.set('port',process.env.PORT || 4000)

app.use(cors())

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// body-parser는 내장되어있음.  json 파싱하기 위해서 설정만 추가
app.use(express.json());
 
// express에는 json 데이터를 파싱하는 모듈이 내장되어있다.
// 하지만 json만 되고 x-www-form-urlencoded를 파싱하기 위해서 아래를 확장해야 한다.
app.use(express.urlencoded({
  extended: true
}))


app.get('/',(req:any,res:any)=>{
    res.send('헬로 지성아아아')
})
app.get('/test',(req:any,res:any)=>{
//json으로 값 어떻게 가져오지??
  res.status(200).json({
    "message":"테스트입니다"
})

})

app.listen(4000,()=>{
  console.log("서버 킴")
})





app.post('/post',(req:any,res:any)=>{
//   const name = req.body.name
// console.log("name: ",name)
//   console.log("req.body:",req.body)

console.log(req.body,"DF");

  const result = req.body;
  res.send(result);
 
  // res.status(200).json(
  //   data
  // )

  // return data
})






