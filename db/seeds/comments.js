exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('comments').del()
      .then(function () {
        // Inserts seed entries
        return knex('comments').insert([
          {name:"Tony", comment:"Strange book", bookId:"1"},
          {name:"BIllly", comment:"Strange book", bookId:"2"},
          {name:"Frank", comment:"Loved the book", bookId:"1"},
        ]);
      });
  };