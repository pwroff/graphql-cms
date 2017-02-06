/**
 * Created by Leonid on 31/01/17.
 */
import Item from '../data/models/Item';
import Division from '../data/models/Division';

import log from '../../log'

const resolvers = {
    Query: {
        items(_, args) {
            return Item.find(args);
        },
        item(_, {id}) {
            return Item.findById(id);
        },
        divisions(_, args) {
            return Division.find();
        },
        division(_, {id}) {
            return Division.findById(id);
        }
    },
    Mutation: {
        createDivision(_, {title, description}) {
            const d = new Division({title, description, created: Date.now()});
            return new Promise((res, rej)=>{
                d.save((e, data)=>{
                    if (e) {
                        log.error(e);
                        rej(e);
                    } else {
                        res(data);
                    }
                })
            });
        },
        createItem(_, props) {
            const i = new Item(props);
            return new Promise((res, rej)=>{
                i.save((e, data)=>{
                    if (e) {
                        log.error(e);
                        rej(e);
                    } else {
                        res(data);
                    }
                })
            });
        }
    },
    Division: {
        items(division) {
            return Item.find({divisionId: division.id})
        }
    },
    Item: {
        division(item) {
            return Division.findById(item.divisionId);
        }
    }
};

export default resolvers;
