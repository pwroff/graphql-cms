/**
 * Created by Leonid on 27/12/16.
 */
import Mongoose from 'mongoose';

const ItemSchema = Mongoose.Schema({
    title: String,
    description: String,
    divisionId: String
});

const Item = Mongoose.model('Item', ItemSchema);

export default Item;
