import {FilterQuery, UpdateQuery, QueryOptions} from 'mongoose';
import User,{UserDocument} from '../models/users';


export function createUser(input:UserDocument){
    return User.create(input)
}

export function findUser(query: FilterQuery<UserDocument>, options: QueryOptions={lean: true}){
    return User.find(query, {}, options)
}

export function updateUser(query: FilterQuery<UserDocument>, update: UpdateQuery<UserDocument>, options: QueryOptions={new: true}){
    return User.findOneAndUpdate(query, update, options)
}

export function deleteUser(query: FilterQuery<UserDocument>){
    return User.deleteOne(query)
}