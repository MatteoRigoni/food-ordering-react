import dbconnect from "../../../utils/mongo" 
import Product from "../../../models/Product" 

export default async function handler(req, res) {
    const {method, query:{ id }} = req;
    console.log("searching");
    dbconnect()

    if (method === 'GET') {
        try {
            
            const products = await Product.findById(id);
            res.status(200).json(products);
        } catch(err) {
            res.status(500).json(err);
        }
    }

    if (method === 'PUT') {
        try {
            const prod = await Product.create(req.body);
            res.status(201).json(prod);
        } catch(err) {
            res.status(500).json(err);
        }
    }

    if (method === 'DELETE') {
        try {
            const prod = await Product.create(req.body);
            res.status(201).json(prod);
        } catch(err) {
            res.status(500).json(err);
        }
    }
  }