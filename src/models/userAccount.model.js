import {Schema, model} from 'mongoose';
import {USER} from '../configuration/constants.js';

const userAccountSchema = new Schema({
    _id: {
        type: String,
        required: true,
        alias: 'login'
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        default: [USER]
    }
});

export default model('UserAccount', userAccountSchema, 'users');