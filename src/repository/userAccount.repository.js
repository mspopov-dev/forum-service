import UserAccount from '../models/userAccount.model.js';

export const register = async (user) => UserAccount.create(user);