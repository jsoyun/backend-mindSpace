
import { ConnectDB } from "./connectDB"
const express= require('express')
const {ApolloServer, gql} = require('apollo-server')

const typeDefs = gql`
  type Query {
    message: String
  }
`;

const resolvers = {
    Query: {
      message: () => 'Hello World!'
    },
  };

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
app.set('port',process.env.PORT || 4000)

app.get('/',(req:any,res:any)=>{
    res.send('헬로 지성아아아')
})
app.get('/test',(req:any,res:any)=>{
    res.status(200).json({
        "message":"테스트입니다"
    })
})



app.post('/post',(req:any,res:any)=>{
    console.log("req",req)
    res.status(200).json({
        "Dfdf":"어서와아"
    })
})





app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'에서 대기중')
})


