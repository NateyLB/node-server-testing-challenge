
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('dogs').insert([
        {id: 1, name: 'Ginger', breed: 'Golden-Retriever', ownerID:1},
        {id: 2, name: 'Pumpkin', breed: 'Golden-Retriever', ownerID:1},
        {id: 3, name: 'Cinnamon', breed: 'Golden-Retriever', ownerID:1},
        {id: 4, name: 'Brownie', breed: 'Black-Labrador', ownerID:2},
        {id: 5, name: 'Bubbles', breed: 'Yorkshire-Terrier', ownerID:3},
        {id: 6, name: 'Cotton', breed: 'Samoyed', ownerID:4},
        {id: 7, name: 'Cloudy', breed: 'Samoyed', ownerID:4},
        {id: 8, name: 'Speedy', breed: 'Australian-Sheperd', ownerID:5},
        {id: 9, name: 'Bolt', breed: 'Australian-Sheperd', ownerID:5},
        {id: 10, name: 'Fluffy', breed: 'Chow-Chow', ownerID:6},
        {id: 11, name: 'Bubba', breed: 'Chow-Chow', ownerID:6},
      ]);
};
