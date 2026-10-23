import UserAccount from '../models/userAccount.model.js';

export const register = async (user) => {
    return await UserAccount.create(user);
}

export const removeUser = async (login) => {
    const user = await UserAccount.findByIdAndDelete(login).exec();
    if (!user) {
        throw new Error(`User with login ${login} not found`);
    }
    return user;
}

export const updateUser = async (login, updateData) => {
    const user = await UserAccount.findByIdAndUpdate(login, {$set: updateData}, {returnDocument: 'after', runValidators: true}).exec();
    if (!user) {
        throw new Error(`User with login ${login} not found`);
    }
    return user;
}

export const changeRoles = async (login, role, isAddRole) => {
    const user = await UserAccount.findByIdAndUpdate(
        login,
        isAddRole ? {$addToSet: {roles: role}} : {$pull: {roles: role}},
        {returnDocument: 'after'}
    ).exec();
    if (!user) {
        throw new Error(`User with login ${login} not found`);
    }
    return user.roles;
}

export const changePassword = async (login, newPassword) => {
    const user = await UserAccount.findByIdAndUpdate(
        login,
        {$set: {password: newPassword}},
        {returnDocument: 'after', runValidators: true}
    ).exec();
    if (!user) {
        throw new Error(`User with login ${login} not found`);
    }
    return user;
}

export const getUser = async (login) => {
    const user = await UserAccount.findById(login).exec();
    if (!user) {
        throw new Error(`User with login ${login} not found`);
    }
    return user;
}