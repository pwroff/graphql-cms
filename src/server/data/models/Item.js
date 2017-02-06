/**
 * Created by Leonid on 27/12/16.
 */
import createModel from './createModel';

const ItemSchema = {
    title: String,
    description: String,
    divisionId: String
};

const Item = createModel('Item', ItemSchema);

export default Item;
