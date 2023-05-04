'use strict';
const bcrypt = require('bcrypt');
const people = [
  { name: 'Connor', image: 'person1.jpg' },
  { name: 'Brendon', image: 'person2.jpg' },
  { name: 'Mehreen', image: 'person3.jpg' },
  { name: 'Pauline', image: 'person4.jpg' },
  { name: 'Kenny', image: 'person5.jpg' },
  { name: 'Kalum', image: 'person6.jpg' },
  { name: 'Mya', image: 'person7.jpg' },
  { name: 'Alexa', image: 'person8.jpg' },
  { name: 'Edna', image: 'person9.jpg' },
  { name: 'Kaylie', image: 'person10.jpg' },
  { name: 'Uzair', image: 'person4.jpg' },
  { name: 'Teddie', image: 'person3.jpg' },
  { name: 'Suraj', image: 'person2.jpg' },
  { name: 'Fatima', image: 'person4.jpg' },
  { name: 'Hira', image: 'person1.jpg' },
  { name: 'Abbey', image: 'person5.jpg' },
  { name: 'Adaline', image: 'person6.jpg' },
  { name: 'Linda', image: 'person7.jpg' },
  { name: 'Mirza', image: 'person9.jpg' },
  { name: 'Fraser', image: 'person8.jpg' },
  { name: 'Aila', image: 'person10.jpg' },
  { name: 'Shannen', image: 'person1.jpg' },
  { name: 'Callie', image: 'person6.jpg' },
  { name: 'Zain', image: 'person4.jpg' },
  { name: 'Ty', image: 'person3.jpg' },
  { name: 'Ciaran', image: 'person2.jpg' },
  { name: 'Amalia', image: 'person1.jpg' },
  { name: 'Cienna', image: 'person3.jpg' },
  { name: 'LolaRose', image: 'person6.jpg' },
  { name: 'Carlton', image: 'person9.jpg' },
];

module.exports = {
  seedUsers: async () => {
    //const hash = await bcrypt.hash('P4ssword', 10);
    return Promise.all(
      people.map(async (person) => ({
        username: `${person.name.toLowerCase()}`,
        email: `${person.name.toLowerCase()}@mail.com`,
        image: `${person.image}`,
        inactive: false,
        password: await bcrypt.hash('P4ssword', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );
  },
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', this.seedUsers(), {});
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkdDelete('users', null, {});
  },
};
