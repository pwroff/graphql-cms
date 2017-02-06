/**
 * Created by Leonid on 06/02/17.
 */
import Mongoose from 'mongoose';

export default (name, schema) => {

    const ItemSchema = Mongoose.Schema(schema, {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'updated'
        }
    });
    const ItemModel = Mongoose.model(name, ItemSchema);

    return ItemModel;
}
