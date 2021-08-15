import Post from './post/Post';
import classes from './Posts.module.css';

const Posts = () => {
    return (
        <div className = {classes.posts}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts;