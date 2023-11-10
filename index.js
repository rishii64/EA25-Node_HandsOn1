const { log } = require("console")
const jsonData = require('./json')

const http = require("http")
http.createServer((req, res)=>{
    const file = {name: "Rishi", age: 23, course: "MERN", batch: "EA25"}
    if(req.url === '/'){
        res.write("<h1>This is my HTTP Server</h1>")
        res.end()
    }
    else if(req.url === '/about'){
        res.write('<h1>This is my About Server Page</h1>')
        res.end()
    }
    else if(req.url === '/student'){
        res.write('This is Student Service Page')
        res.end()
    }
    else if(req.url === '/info'){
        // res.write(JSON.stringify(file))
        res.write(JSON.stringify(jsonData))
        res.end()
    }
    else{
        res.write('Bad Request !!')
        res.end('\n 404 not found...!!')
    }
}).listen(3000, ()=>{
    console.log("server started...");
    // try{
    //     console.log('Server started at port 3000');
    // }
    // catch{
    //     console.log(err, "404 Not Found..!!!");
    // }
})