const mongoose = require("mongoose");

module.exports = async () =>{
    
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(`DB Connection Success`)
    }
    catch(err){
        console.log({error: err})
    }   
}


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://guestUser1:TyYCpR1u7bG9UZ3W@cluster0.y4fzb.mongodb.net/book-library-app?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// module.exports = run = async() =>{
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
