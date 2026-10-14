import Post from '../models/post.model.js';

export const createPost = async (postData) => {
    // const post = new Post(postData);
    // return post.save();
    return Post.create(postData);
}
export const findById = async (id) => {
    return Post.findById(id);
    if(!post) {
        throw new Error('Post not found');
    }
    return post;
}