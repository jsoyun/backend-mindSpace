const express= require('express')

const app = express()
//서버가 실행될 포트를 설정
app.set('port',process.env.PORT || 3000)

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