var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
        title :'Article one , Supriya',
        heading: 'Articleone',
        date : 'Aug 19th',
        content : `<div>
                    <p> This is my first article... This is my first article... This is my first article...  </p>    
                    </div> 
                    <div>
                    <p> This is my first article... This is my first article... This is my first article...  </p>    
                    </div> 
                    <div>
                    <p> This is my first article... This is my first article... This is my first article...  </p>    
                    </div> 
                    </div>`
    },
    'article-two':{
        title :'Article two , Supriya',
        heading: 'Article Two',
        date : 'Aug 19th',
        content : `<div>
                <p> This is my Second  article... This is my first article... This is my first article...  </p>    
                </div> 
                <div>
                <p> This is my second article... This is my first article... This is my first article...  </p>    
                </div> 
                <div>
                <p> This is my second article... This is my first article... This is my first article...  </p>    
                </div> 
                </div>`
    },
    'article-three':{
        title :'Articlethree , Supriya',
        heading: 'Articlethree',
        date : 'Aug 19th',
        content : `<div>
                    <p> This is my third article... This is my first article... This is my first article...  </p>    
                    </div> 
                    <div>
                    <p> This is my third article... This is my first article... This is my first article...  </p>    
                    </div> 
                    <div>
                    <p> This is my third article... This is my first article... This is my first article...  </p>    
                    </div> 
                    </div>`
    }
};    
function createTemplate(dataobject){
var title = dataobject.title;
var heading = dataobject.heading;
var date = dataobject.date;
var content = dataobject.content;
var HTMLtemplate =
    `<html>
        <head>
            <title>    
            ${title}
            </title>
            <meta name = "viewport" content = "width=device-width initial-scale=1" /> 
            <link href="/ui/style.css" rel="stylesheet" />
            
        </head>
    <body>
        <div class = container >
            <div>
                <a href = "/"> Home </a> 
            </div>
            <h3>
            ${heading}
            </h3>
            <div>
            ${date}
            </div>
            <div>
            ${content}
            </div>
        </div>
    </body>
</html>`;
return HTMLtemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
  res.send(counter.tostring());
});


app.get('/:articleName', function (req, res){
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
      res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/article-two', function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/ui/main.js', function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/article-three', function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
