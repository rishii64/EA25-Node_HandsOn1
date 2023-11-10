const { log } = require("console")
const jsonData = require('./json')

const http = require("http")
http.createServer((req, res)=>{
    // const file = {name: "Rishi", age: 23, course: "MERN", batch: "EA25"}
    if(req.url === '/'){
        res.write("<h1>This is my HTTP Server</h1>")
        res.write("<h2>What is Node Js?</h2>")
        res.write("Node is an open source, cross-platform, JavaScript runtime environment built on Chrome's V8 JS engine that executes js code outside web-browser.")
        res.write("<h3>Advantages:</h3>")
        res.write("<ul><li>Fast-processing for web-tasks.</li><li>Robust technology stack.</li><li>Rich ecosystem</li><li>Seamless JSON support.</li><li>Scalable technology for microservices.</li><li>Large developer community.</li><li> Performance bottlenecks with heavy computation tasks.</li></ul>")
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