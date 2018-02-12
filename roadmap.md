1. folder -> server.sj -> npm init
2. npm install express --save
3. npm install nodemon --save, then use 'rs' to quickly restart server
4. npm install morgan --save. It is a middleware (logger), app.use() -> that's how we use all middlewares in express apps.
5. npm install mongoose --save, handler mongodb for express
// make sure that you kill :27017 for mongod before running it again
6. npm install --save body-parser -> when we create user or communicate with url, we need to parse data into JSON.
7. Tip which saves you a lot of time - when we test routes and requests throw postman or something else, we need to specify header-content type to application/json.
8. for encryption we gonna use mongoose-bcrypt.
9. 
