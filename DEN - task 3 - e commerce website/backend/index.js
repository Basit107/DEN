// index.js
const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");

app.use(express.json());
app.use(cors());


// Database connection with MongoDB
mongoose.connect("mongodb+srv://basit107:RFbankJ90Y97nKvx@cluster0.bfpts.mongodb.net/e-commerce")


// API Creation
app.get("/", (request, response) => {
  response.send("Express App is Running.")
})

app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on port: " + port);
  }
  else {
    console.log("Error: " + error);
  }

})

// Image Storage engine
const storage = multer.diskStorage({
  destination: './upload/images',
  filename:(request, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({storage:storage})


//  Creatintg Upload Endpoint for Images.
app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single('product'), (request, response) => {
  response.json({
    success:1,
    image_url:`http://localhost:${port}/images/${request.file.filename}`
  })
})

// Schema For Creating Products

const Product = mongoose.model("product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },

})

app.post('/addproduct', async (request, response) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  }
  else {
    id = 1;
  }

  const product = new Product({
    id:id,
    name:request.body.name,
    image:request.body.image,
    category:request.body.category,
    new_price:request.body.new_price,
    old_price:request.body.old_price,
    available:request.body.available
  });

  console.log(product);
  await product.save();
  console.log("Product is Saved");
  response.json({
    success: true,
    name: request.body.name,
  })
})

// Creating API for Deletiong Products
app.post('/removeproduct', async (request, response) => {
  await Product.findOneAndDelete({id:request.body.id});
  console.log("Product is Removed");
  response.json({
    success: true,
    name: request.body.name,
  })
  
})


// Creqating API For Getting All Products.
app.get('/allproducts', async (request, response) => {
  let products = await Product.find({});
  console.log("All products Fetched.");
  response.send(products);
  
})














































































































































































// const express = require('express');
// const { log } = require("console");
// const mongoose = require('mongoose');
// const app = express();
// const PORT = process.env.PORT || 5000;
// const cors = require('cors');
//  //replace the link with your mongodb atlas link
// mongoose.connect('mongodb://localhost:27017',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// );
 
// app.use(express.json());
// app.use(cors()); // Use the cors middleware
 
// const productSchema = new mongoose.Schema({
//   name: String,
//   type: String,
//   description: String,
//   price: Number,
//   image: String,
// });
 
// const Product = mongoose.model('Product', productSchema);
 
// // Function to seed initial data into the database
// const seedDatabase = async () => {
//   try {
//     await Product.deleteMany(); // Clear existing data
 
//     const products = [
//       {
//         name: "Men's Casual T-shirt",
//         type: 'Men',
//         description: 'Comfortable and stylish casual T-shirt for men',
//         price: 350,
//         image: 
// 'https://media.geeksforgeeks.org/wp-content/uploads/20230407153931/gfg-tshirts.jpg'
//       },
//       {
//         name: 'Luxury bag',
//         type: 'Not Applicable', 
//         description: 'Elegant luxury bag with leather strap',
//         price: 2500,
//         image: 
// 'https://media.geeksforgeeks.org/wp-content/uploads/20230407154213/gfg-bag.jpg'
//       },
//       {
//         name: "Hoodie",
//         type: 'Men',
//         description: 'Light and classy hoodies for every seasons ',
//         price: 450,
//         image: 
// 'https://media.geeksforgeeks.org/wp-content/uploads/20230407153938/gfg-hoodie.jpg'
//       },
//       {
//         name: 'Remote Control Toy car',
//         type: 'Not Applicable', 
//         description: 'High-quality Toy car for fun and adventure',
//         price: 1200,
//         image: 
// 'https://media.geeksforgeeks.org/wp-content/uploads/20240122182422/images1.jpg'
//       },
//       {
//         name: 'Books',
//         type: 'Women',
//         description: 'You wll have a great time reading .',
//         price: 5000,
//         image: 
// 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011854/reading-925589_640.jpg'
//       },
//       {
//         name: 'Bag',
//         type: 'Men', 
//         description: 'Comfortable and supportive Bag ',
//         price: 800,
//         image: 
// 'https://media.geeksforgeeks.org/wp-content/uploads/20230407154213/gfg-bag.jpg'
//       },
//       {
//         name: 'Winter hoodies for women',
//         type: 'Women',
//         description: 'Stay cozy in style with our womens hoodie, crafted for comfort ',
//         price: 250,
//         image: 
// 'https://media.geeksforgeeks.org/wp-content/uploads/20230407153938/gfg-hoodie.jpg'
//       },
      
//       {
//         name: 'Honda car ',
//         type: 'Men',
//         description: 'Powerful Honda car with comfy driving',
//         price: 700,
//         image: 
// 'https://media.geeksforgeeks.org/wp-content/uploads/20240122184958/images2.jpg'
//       }
//     ];
    
  
    
      
 
//     await Product.insertMany(products);
//     console.log('Database seeded successfully');
//   } catch (error) {
//     console.error('Error seeding database:', error);
//   }
// };
 
// // Seed the database on server startup
// seedDatabase();
 
// // Define API endpoint for fetching all products
// app.get('/api/products', async (req, res) => {
//   try {
//     // Fetch all products from the database
//     const allProducts = await Product.find();
 
//     // Send the entire products array as JSON response
//     res.json(allProducts);
//   } catch (error) {
//     console.error(error);
//     res.status(500)
//       .json({ error: 'Internal Server Error' });
//   }
// });
 
// app.listen(PORT, () => {
//   console.log(
//     `Server is running on port ${PORT}`
//   );
// });
