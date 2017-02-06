import createModel from './createModel';

const DivisionSchema = {
    title: String,
    description: String,
    created: String
};

const Division = createModel('Division', DivisionSchema);

export default Division;
