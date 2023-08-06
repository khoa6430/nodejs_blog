const express = require('express');
const path = require('path')

console.log(__dirname)
console.log(path.join(__dirname,'../'))

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public');
// console log  D:\work\nodejs_blog\web-server\public

app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.send('<h1>Hello express!</h1>')
})
app.get('/help',(req,res)=>{
    res.send([{
        name:'Khoa',
        age:24
    },
    {
        name:'Khoa 2',
        age:24
    },
])
})
app.get('/weather', (req, res) => {
    res.send({
    forecast: 'It is snowing',
    location: 'Philadelphia'
    })
    })
// app.com
// app.com/help
// app.com/about
app.listen(3000,()=>{
    console.log('Server is up on port 3000.')
}) 
 