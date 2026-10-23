import * as userAccountService from '../services/userAccount.service.js';

export const register = async (req, res, next) => {
    try {
        const userAccount = await userAccountService.register(req.body);
        return res.status(201).json(userAccount);
    } catch (e) {
        return next(e);
    }
}

export const login = async (req, res, next) => {
    try {
        const userAccount = await userAccountService.getUser(req.body.login);
        if (userAccount.password !== req.body.password) {
            throw new Error('Invalid credentials');
        }
        return res.json({
            login: userAccount.login,
            roles: userAccount.roles
        });
    } catch (e) {
        return next(e);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const userAccount = await userAccountService.removeUser(req.params.login);
        return res.json(userAccount);
    } catch (e) {
        return next(e);
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const userAccount = await userAccountService.updateUser(req.params.login, req.body);
        return res.json(userAccount);
    } catch (e) {
        return next(e);
    }
}

export const addRole = async (req, res, next) => {
    try {
        const userRoles = await userAccountService.changeRoles(req.params.login, req.params.role, true);
        return res.json(userRoles);
    } catch (e) {
        return next(e);
    }
}

export const deleteRole = async (req, res, next) => {
    try {
        const userRoles = await userAccountService.changeRoles(req.params.login, req.params.role, false);
        return res.json(userRoles);
    } catch (e) {
        return next(e);
    }
}

export const changePassword = async (req, res, next) => {
    try {
        const userAccount = await userAccountService.changePassword(req.body.login, req.body.newPassword);
        return res.json(userAccount);
    } catch (e) {
        return next(e);
    }
}

export const getUser = async (req, res, next) => {
    try {
        const userAccount = await userAccountService.getUser(req.params.login);
        return res.json(userAccount);
    } catch (e) {
        return next(e);
    }
}