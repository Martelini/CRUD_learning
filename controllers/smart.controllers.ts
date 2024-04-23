// // Imports

// import { RequestHandler } from "express";
// import { dbClient } from "./infrastructure/mongodb/mongo_connection";
// import { ObjectId, Timestamp } from "mongodb";

// // Interfaces

// interface User {
//     _id: ObjectId,
//     email: string,
//     password: string,
//     username: string,
//     fullName: string,
//     birthDate: { day: number, month: number, year: number }
// }

// interface Post {
//     _id: ObjectId,
//     accountId: ObjectId,
//     message: string,
//     timestamp: Timestamp
// }

// // Variables

// const database = dbClient.db('smart');
// const users = database.collection<User>('users');
// const posts = database.collection<Post>('posts');

// // Local functions

// function checkError(error: any): string {
//     if (error instanceof Error) {
//         return error.message;
//     }
//     return 'Unknown error';
// }

// // External functions

// // welcomeMessage

// export const welcomeMessage: RequestHandler = async (req, res) => {
//     try {
//         console.log('welcomeMessage');
//         res.send('Welcome to Smart!!!');
//     } catch (error) {
//         res.status(500).json(checkError(error));
//     }
// }

// // Users functions //

// // signUp

// export const signUp: RequestHandler = async (req, res) => {
//     try {
//         console.log('signUp');
//         const result = await users.insertOne(req.body);
//         res.status(200).json(result);
//     } catch (error) {
//         res.status(500).json(checkError(error));
//     }
// }

// // Get all users

// export const getAllUsers: RequestHandler = async (req, res) => {
//     try {
//         console.log('getAllUsers');
//         const result = await users.find().toArray();
//         if (result) {
//             res.status(200).json(result);
//         }
//         else {
//             res.status(404).json('None user found!');
//         }
//     } catch (error) {
//         res.status(500).json(checkError(error));
//     }
// }

// // Get one user by ID

// export const getUser: RequestHandler = async (req, res) => {
//     try {
//         console.log('getUser');
//         const { userId } = req.params;
//         const result = await users.findOne({ '_id': new ObjectId(userId) });
//         if (result) {
//             res.status(200).json(result);
//         } else {
//             res.status(404).json({ message: 'User could not be found!' });
//         }
//     } catch (error) {
//         res.status(500).json(checkError(error));
//     }
// }

// // Update user

// export const updateUser: RequestHandler = async (req, res) => {
//     try {
//         console.log('updateUser');
//         const { userId } = req.params;
//         const result = await users.updateOne({ '_id': new ObjectId(userId) }, { $set: req.body });
//         if (result) {
//             res.status(200).json(result);
//         } else {
//             res.status(404).json({ message: 'User could not be found!' });
//         }
//     } catch (error) {
//         res.status(500).json(checkError(error));
//     }
// }

// // Delete user

// export const deleteUser: RequestHandler = async (req, res) => {
//     try {
//         console.log('deleteUser');
//         const { userId } = req.params;
//         const result = await users.deleteOne({ '_id': new ObjectId(userId) });
//         if (result) {
//             res.status(200).json(result);
//         } else {
//             res.status(404).json({ message: 'User could not be found!' });
//         }
//     } catch (error) {
//         res.status(500).json(checkError(error));
//     }
// }

// // Post functions //

// // Create post

// export const createPost: RequestHandler = async (req, res) => {
//     try {
//         console.log('createPost');
//         const { userId } = req.params;
//         req.body.accountId = new ObjectId(userId);
//         req.body.timestamp = Date.now();
//         const result = await posts.insertOne(req.body);
//         if (result) {
//             res.status(200).json({ message: 'Posted successfully', result: result });
//         } else {
//             res.status(500).json({ message: 'Could not create post' });
//         }
//     } catch (error) {
//         res.status(500).json(checkError(error));
//     }
// }

// // Read all posts (limited to 20)

// export const readAllPosts: RequestHandler = async (req, res) => {
//     try {
//         console.log('readAllPosts');
//         const result = await posts.find().toArray();
//         if (result) {
//             res.status(200).json(result);
//         } else {
//             res.status(404).send('None posts were found!');
//         }            
//     } catch (error) {
//         res.status(500).json(checkError(error));
//     }
// }

// // Read all posts of a user

// export const readAllUserPosts: RequestHandler = async (req, res) => {
//     try {
//         console.log('readAllUserPosts');
//         const { userId } = req.params;
//         const user = await users.findOne({ _id: new ObjectId(userId) });
//         if (user) {
//             const result = await posts.find({ accountId: new ObjectId(userId) }).toArray();
//             if (result) {
//                 res.status(200).json(result);
//             } else {
//                 res.status(404).send('None posts were found!');
//             }
//         } else {
//             res.status(404).send('User not found!');
//         }            
//     } catch (error) {
//         res.status(500).json(checkError(error));
//     }
// }

// // Delete one post of a user

// export const deletePost: RequestHandler = async (req, res) => {
//     try {
//         console.log('deletePost');
//         const { userId, postId } = req.params;
//         const user = await users.findOne({ _id: new ObjectId(userId) });
//         const post = await posts.findOne({ _id: new ObjectId(postId) });
//         if ( (user != null) && (post != null)) {
//             const result = await posts.deleteOne({ _id: new ObjectId(postId) });
//             if (result) {
//                 res.status(200).json(result);
//             } else {
//                 res.status(404).send('Post or user does not exits!');
//             }
//         } else {
//             res.status(404).send('User not found!');
//         }            
//     } catch (error) {
//         res.status(500).json(checkError(error));
//     }
// }
