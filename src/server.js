//Dados
const proffys = [
    {
    name:"Diego Fernandes", 
    avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp:"86999998797", 
    bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject:"Química", 
    cost:"20", 
    weekday:[0], 
    time_from:[720], 
    time_to:[1220]
    },
    {
        name:"Pedro", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp:"86999998797", 
        bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject:"Física", 
        cost:"240", 
        weekday:[1], 
        time_from:[720], 
        time_to:[1220]
        }
]

const subjects = [
"Artes",
"Biologia",
"Ciências",
"Educação Física",
"Física",
"Geografia",
"História",
"Matemática",
"Português",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    ]

//Funcionalidades
function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html")
}
function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html" , {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query 

    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty){

        data.subject = getSubject(data.subject)

        proffys.push(data)
        
        return res.redirect("/study")
    }

        //se não, mostrar a página
   return res.render("give-classes.html", {subjects, weekdays})
}

//Servidor
const express = require('express')
const server = express()
       

//configurar o nunjucks
const nunjucks = require('nunjucks')    //Nunjucks é um template de edição de html
nunjucks.configure('src/views',{
    express: server,
    noCache: true, 
})

server 
//configurar arquivos estáticos como css, script, imagens
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)






/*"npm install nodemon -D" é para criar um servidor/
/*"npm run dev" é para rodar a aplicação no servidor*/ 
/*"express" é uma função*/




