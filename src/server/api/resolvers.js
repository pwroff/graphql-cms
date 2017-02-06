/**
 * Created by Leonid on 31/01/17.
 */
import Item from '../data/models/Item';
import Division from '../data/models/Division';

import log from '../../log'

const withPagination = (executor, {skip = 0, limit = 10, offset = 0}) => {
    return executor()
        .limit(limit + offset)
        .skip(skip)
        .sort({
            created: 'asc'
        });
};

const resolvers = {
    Query: {
        items(_, {pagination}) {
            return withPagination(Item.find.bind(Item), pagination);
        },
        item(_, {id}) {
            return Item.findById(id);
        },
        divisions(_, {pagination}) {
            return withPagination(Division.find.bind(Division), pagination);
        },
        division(_, {id}) {
            return Division.findById(id);
        }
    },
    Mutation: {
        createDivision(_, {params}) {
            const d = new Division(params);
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
        createItem(_, {params}, context) {
            const i = new Item(params);
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
