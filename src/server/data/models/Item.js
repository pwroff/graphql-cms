/**
 * Created by Leonid on 27/12/16.
 */
import Mongoose from 'mongoose';
Mongoose.connect('mongodb://localhost/graph-cms');

const ItemSchema = Mongoose.Schema({
    title: String,
    image: String,
    text: String,
    active: Boolean,
    views: Number,
    price: Number,
    height: Number,
    width: Number,
    radius: Number,
    brand: String,
    type: String,
    variant: String,
    car: String,
    dco: Number,
    pcd: String,
    et: Number,
    condition: String,
    vehicle: String
});

const Item = Mongoose.model('Item', ItemSchema);

export default Item;
