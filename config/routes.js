//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
module.exports = function(app){

  app.get('/', template.getAllBooks);//get the books
  app.get('/addbook', template.getAllAuthor)
  app.get('/addbook', template.new)
  app.post('/', template.addBook);// add a book
  app.get('/addAuthor', template.newAuthor)
  app.post('/addAuthor', template.addAuthor);// add a author
  app.get('/comments/:bookId', template.getComment)
  // app.get('/comments/:bookId', template.getMoreBooks)
 app.post('/comments/:bookId', template.postComment);// comment on book
}
