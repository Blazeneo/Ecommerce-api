#start cmd
npm start

Ecommerce-api a node based API project. It used mongoDb for database.

localhost:3000(GET)/poducts

Will fetch and display all the products details.

localhost:3000(POST)/poducts/create

Will create new product field using {
  name: laptop,
  quantity: 10
}
  data format


localhost:3000(POST)/poducts/:id/update_quantity/?number=10

Will take id and the quantity and update it in the DB.

localhost:3000(DELETE)/poducts/:id

Will delete the product by the given id


