
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('owners').insert([
        {id: 1, name: 'Sally'},
        {id: 2, name: 'Harry'},
        {id: 3, name: 'Bobby'},
        {id: 4, name: 'Karen'},
        {id: 5, name: 'Heather'},
        {id: 6, name: 'Jamie'},
      ]);
};
