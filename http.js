const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("this is our homepage")
    }
    if(req.url === "/about"){
        res.end("this is our history")
    }
    res.end(`
    <h1> oops </h1>
    <p> please go back to homepage </p>
    <a href="/"> home page </a>
    `)
    

})

server.listen(5000)