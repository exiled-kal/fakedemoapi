// invoking this builtin require function

const express = require('express');

// invoke that function that gave us when nodemon Server.js
const app = express();


// we gonna use middleware to give us access to the req.body through postman app
// invoke json and app function
app.use(express.json())


// respond to index route
// create call back fnc to respond to the get request to the 
// index route with ref req and ref res

app.get('/', (req, res) => {
    // send sth with my res
    //send back json with an obj than a string
    res.json({message:'Hello from Express'})
})

//retrieve all stores
app.get('/api/stores', (req, res) => {
    res.json({
        stores: [{
            name: "Ralph's",
            address: '12345 First Street'
        }]
    });
});

//retrieve one store
// get a specific store n created n object
app.get('/api/stores/:id', (req, res) => {
    res.json({
//key of store
            store: {
    // + will take in id as integer
                id: +req.params.id,
                name: "Ralph's",
                address: '12345 First Street'
            }
        });
    });


// create stores api where we can add some stores
// a cllbckfn acess to my req and res
app.post('/api/stores', (req,res) => {
    // get acces to req body(req,body)
    console.log('This is the request body', req.body);
    res.json({message: 'Stores created!'})
})
//delete a store
// id is available throough the req object
app.delete('/api/stores/:id', (req, res) => {
    //req.params is obj that represents all the path variables that we have inside the route path
    console.log(req.params)
    res.json({message: 'Deleted store with id ' + req.params.id});
})

//updating a store
app.put('/api/stores/:id', (req, res) => {
    console.log(req.body);
    res.json({
        store: {
            id: req.params.id,
            name: "Trader Joe's",
            address: '12345 First Street'
        }
    });

});
// we need to listen people makin request for our server
// 8000 is our port
// when ever its run it will invoke call function with console.log
app.listen(8000, () => console.log('Listening on port 8000!'));