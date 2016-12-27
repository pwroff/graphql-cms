import Mongoose from 'mongoose';
import casual from 'casual';
import Item from './models/Item';

casual.define('item_params', function() {
    return {
        title: casual.title,
        text: casual.sentences(3),
        price: casual.double(10, 3000),
        views: casual.integer(0, 10),
        radius: casual.integer(9, 27),
        height: casual.integer(45, 110),
        width: casual.integer(125, 245),
        type: casual.random_element(['tire', 'wheel', 'combination']),
        variant: casual.random_element(['all seasons', 'winter', 'summer']),
        brand: casual.company_name,
        active: !casual.random_element([0, 1]),
    };
});

const count = 20,
    defParams = () => {
        return casual.item_params
    },
    defModel = Item;

const mongo = Mongoose.connect('mongodb://localhost/graph-cms');

const seed = (model = defModel, params = defParams)=>{
    let a = model.remove();
    a.exec();
    return new Promise((res, rej)=>{
        const incr = (i) => {
            if (i == count) {
                res();
            } else {
                const p = new model(params(i));
                p.save().then(incr.bind(undefined, i+1), rej);
            }
        };

        incr(0);
    });
};

export default seed;
