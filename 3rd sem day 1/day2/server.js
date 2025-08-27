const server = require("http")
server.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("this is my first page")
    }
    else
        if(req.url==='/'){
            res.write("this is about page")
        }
        else
            if(req.url==="/about"){
                res.write("this is about  page")
        }
        else
            if(req.url==="/contact"){
                res.write("this is my first page ")
            }
        
    
    // res.write("<h1> Welcome to my server</h1>")
    res.end("404 error not found")
}).listen(4000,()=>{
    console.log("Server is start")
})

