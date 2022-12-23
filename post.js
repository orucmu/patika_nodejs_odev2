const { rejects } = require("assert");
const { resolve } = require("path");

const userPost = [
    { user: 'User1', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { user: 'User2', post: 'Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet.' },
    { user: 'User3', post: 'Nec dui nunc mattis enim ut tellus. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce.' },
]

const listPosts = () => {
    userPost.map(post => {
        console.log(post.user, ':', post.post)
    })
};

const addPost = (newPost) => {
    const promise = new Promise((resolve, reject) => {
        userPost.push(newPost)
        resolve(userPost)
        reject('Bir hata oluştu.')
    })
    return promise;
}

async function showPosts() {
    try {
        await addPost({ user: 'User4', post: 'In arcu cursus euismod quis viverra nibh cras pulvinar. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar.' })
        listPosts()
    } catch (error) {
        console.log(error);
    }
}

showPosts()