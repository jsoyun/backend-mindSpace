
const http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type' : 'text/html; charset=utf-8'
    })
    res.write('<h1>hello node</h1>')

}).listen(8080,()=>{ //서버 연결
  console.log('대긱중')
})