const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  getAllBooks: (req, res) => {
    knex("book").orderBy("id").then((results) => {
      res.render('index', { book: results })
    })
  },
  getAllAuthor: (req, res) => {
    knex("author").orderBy("id").then((results) => {
      res.render('addbook', { author: results })
    })
  },
  new: (req, res) => {
    res.render("addbook")
  },
  addBook: (req, res) => {
    knex("book").insert({
      title: req.body.title,
      imgUrl: req.body.imgUrl,
      description: req.body.description,
      author: req.body.author
    }).then(() => {
      console.log(req.body.author)
      res.redirect('/')
    })
  },
  newAuthor: (req, res) => {
    res.render("addAuthor")
  },
  addAuthor: (req, res) => {
    knex("author").insert({
      authorName: req.body.authorName,
      bio: req.body.bio
    }).then(() => {
      res.redirect('/')
    })
  },
  getComment: (req, res) => {
    knex('book').where('id', req.params.bookId)
    .then((bookResult)=>{
      knex('comments').where('bookId', req.params.bookId)
      .then((commentResult)=>{
        res.render('comments', {book: bookResult[0], comments: commentResult});	
  })
})
  },
  postComment: (req, res) => {
    knex("comments").insert({
      name: req.body.name,
      comment: req.body.comment,
      bookId: req.params.bookId
    }).then(() => {
      res.redirect(''+req.params.bookId)
    })
  }

  // getMoreBooks: (req, res) => {
  //   knex("book").orderBy("id").then((results) => {
  //     res.render('comments', { book: results })
  //   })
  // }
}
