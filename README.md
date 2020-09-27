# Snack Basket

## Get your snack on!

### About the Project

Snack Basket is an app that allows you to search and save your favorite recipes! You can find random recipes, search by keyword for recipes, and if you are logged in, save and remove your favorite recipes.

This app was built as a challenge for Shellhacks 2020!

### Built With

Snack Basket was created using React and Bootstrap on the front end, Node.js and Express on the back end, and MongoDB for a database. We also used the Spoonacular API for our recipe data.

### Screenshots

|                                                                      |                                                                        |
| :------------------------------------------------------------------: | :--------------------------------------------------------------------: |
|  <img width="500px" alt="home" src="./client/src/assets/home.png"/>  | <img width="500px" alt="recipe" src="./client/src/assets/recipe.png"/> |
| <img width="500px" alt="saved" src="./client/src/assets/saved.png"/> |  <img width="500px" alt="about" src="./client/src/assets/about.png"/>  |

### Getting Started

You can get started with Snack Basket by cloning the repository, and then:

```
cd snack-basket
yarn install
cd client && yarn install
```

To run the project, you will need a .env file with a MongoDB connection string, a Spoonacular API key and a JWT secret. Once you have that, cd into the root directory and run `yarn dev` to run both client and server, `yarn start` for just the client or `yarn server` for just the server.

#### Dependencies:

|      Client       |     Root      |
| :---------------: | :-----------: |
|     bootstrap     |     axios     |
| html-react-parser |    bcrypt     |
|       react       |   are neat    | concurrently |
|  react-bootstrap  | cookie-parser |
|     react-dom     |     cors      |
| react-router-dom  |    dotenv     |
|   react-scripts   |    express    |
|  react-bootstrap  | jsonwebtoken  |
|     react-dom     |    mongodb    |
| react-router-dom  |   mongoose    |
|   react-scripts   |   passport    |
|     react-dom     | passport-jwt  |
| react-router-dom  |     path      |
|   react-scripts   |   validator   |

### About Us

We are three developers who joined forces to code this app for Shellhacks 2020!

[Liz](https://github.com/e-a-w)

[Francesca](https://github.com/cescamar)

[Chris](https://github.com/chrisfalcon746)
