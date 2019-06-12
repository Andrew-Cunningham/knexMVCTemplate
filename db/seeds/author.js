exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('author').del()
      .then(function () {
        // Inserts seed entries
        return knex('author').insert([
          {authorName:"Frank Booker", bio:"A book writer...."},
          {authorName:"Tom Writer", bio:"Tom Writer writes books....."},
          
        ]);
      });
  };