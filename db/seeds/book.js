
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('book').del()
    .then(function () {
      // Inserts seed entries
      return knex('book').insert([
        {title: 'A Good Book', imgUrl:'https://images-na.ssl-images-amazon.com/images/I/41-y7JzNefL.jpg', description:'book description', author: 'Bill'},
        {title: 'A Bad Book', imgUrl:'https://images-na.ssl-images-amazon.com/images/I/41-y7JzNefL.jpg', description:'book description', author: 'Chill'},
      ]);
    });
};


