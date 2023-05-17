
const http  = require('http')
const cors = require('cors')
const fs = require('fs').promises

http.createServer(async(req,res )=>{

    //TODO: cors 에러 블로그 정리 
    //TODO: promise 개념 정리

     // Enable CORS for all routes
     await new Promise((resolve, reject) => {
        cors()(req, res, resolve);
      });


      try{
        
        const data = await fs.readFile('./server2.html')
        res.writeHead(200,{
        'Content-Type' : 'text/html; charset=utf-8',
        
    })

 

    if(req.method === 'POST') {
        // TODO: /주소로!!
        if(req.url ==='/post'){
            console.log("헤어랑라")

            const responseData = { message: 'Hello from the server!' };

            return res.end(JSON.stringify(responseData))

        
    
        }
    }
   return res.end(data)
    // res.write('<h1>hello node</h1>')

    }catch(err){
        console.log(err)
        res.writeHead(500,{
                'Content-Type' : 'text/html; charset=utf-8'
            })
       return  res.end(err.message)
        
    }

      

    // cors()(req, res, async() =>{
    //     try{
        
    //         const data = await fs.readFile('./server2.html')
    //         res.writeHead(200,{
    //         'Content-Type' : 'text/html; charset=utf-8',
            
    //     })
    
     
    
    //     if(req.method === 'POST') {
    //         if(req.url ==='/post'){
    //             console.log("헤어랑라")

    //             const responseData = { message: 'Hello from the server!' };

    //             res.end(responseData)

            
        
    //         }
    //     }
    //     res.end(data)
    //     // res.write('<h1>hello node</h1>')
    
    //     }catch(err){
    //         console.log(err)
    //         res.writeHead(500,{
    //                 'Content-Type' : 'text/html; charset=utf-8'
    //             })
    //         res.end(err.message)
            
    //     }

    // })
  
    // res.writeHead(200,{
    //     'Content-Type' : 'text/html; charset=utf-8'
    // })
    // res.write('<h1>hello node</h1>')

}).listen(8080,()=>{ //서버 연결
  console.log('server2.ts대기중')
})