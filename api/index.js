if(process.env.MONGO_URL !== 'production'){
  require('dotenv').config()
}
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express();
const serverPort = 3000;
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB: " + error.message);
   
  });



app.listen(serverPort, () => {
  console.log("Connected to Server port: " + serverPort);
});

const Item = require('./menu')

app.post('/add', async (req, res) => {
  try {
    const {
      itemName,
      quantity,
      expiredDate,
      manufactors,
    } = req.body;
    const menu = await Item.findOne({ itemName });
    
    const newItem = new Item({
      itemName,
      quantity,
      expiredDate,
      manufactors,
    });

    await newItem.save();

    res.status(200).json({ message: 'Item saved successfully', newItem: newItem });
  } catch (error) {
    console.error("Error saving item: " + error.message);
    res.status(500).json({ message: "Error saving item: " + error.message });
  }
});

app.get('/', async (req, res) => {
 try {
    const inventoryItems = await Item.find();
    res.status(200).json(inventoryItems);
    console.log("jatdog")
  } catch (error) {
    console.error("Error fetching inventory items: " + error.message);
    res.status(500).json({ message: "Error fetching inventory items: " + error.message });
  }
});

app.delete('/delete/:id', async (req, res) => {
    const itemIdToDelete = req.params.id;

    try {
        const deletedItem = await Item.findByIdAndDelete(itemIdToDelete);

        if (deletedItem) {
            res.status(200).json({ message: "Item deleted successfully" });
        } else {
            res.status(404).json({ message: "Item not found or already deleted" });
        }
    } catch (err) {
        console.error("Error deleting item:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});



const { body, validationResult } = require('express-validator');

app.put('/edit/:id', 
  // Validate inputs
  [
    body('itemName').notEmpty().withMessage('Item name is required'),
    body('quantity').isNumeric().withMessage('Quantity should be a number'),
    body('manufactors').notEmpty().withMessage('Manufactors is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { itemName, quantity, expiredDate, manufactors } = req.body;
    const itemId = req.params.id;
    console.log(itemId);
    console.log('Received request to update item with ID:', itemId);

    try {
      const updatedItem = { itemName, quantity, expiredDate, manufactors };

      const updatedDocument = await Item.findByIdAndUpdate(itemId, updatedItem, { new: true, runValidators: true });
      console.log(updatedItem)
      if (!updatedDocument) {
        console.error('Failed to update item:', itemId);
        return res.status(404).json({ message: 'Item not found' });
      }

      console.log('Item updated successfully:', updatedDocument);
      return res.status(200).json({ message: 'Item updated successfully', updatedItem: updatedDocument });
    } catch (err) {
      console.error('Error updating item:', err);
      if (err.name === 'ValidationError' || err.name === 'CastError') {
        return res.status(400).json({ message: 'Validation error', error: err.message });
      }
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
);



  app.get('/search', async (req, res) => {
    const { q } = req.query;
  
    try {
      const items = await Item.find({ itemName: { $regex: q, $options: 'i'} }).exec();
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });





  