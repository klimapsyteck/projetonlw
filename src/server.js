
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//setting configuration of nunjuscks
nunjucks.configure('src/views', {
    express: server,
    noCach: true
})

server
//With this confuguration I can recive the dates about form hidden
.use(express.urlencoded({ extended: true}))
// setting configuration to static folders like {css, scripts, images}
.use(express.static("public"))

//putting routs in my application trhoug JS
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

// listening the port 5500
.listen(5500)