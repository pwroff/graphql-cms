import Mongoose from 'mongoose';

const DivisionSchema = Mongoose.Schema({
    title: String,
    description: String
});

const Division = Mongoose.model('Division', DivisionSchema);

export default Division;
