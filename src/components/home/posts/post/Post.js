import classes from './Post.module.css'
import like from '../../../../icons/heart.png'
import comment from '../../../../icons/comment.png'
import chat from '../../../../icons/chat.png'
import smile from '../../../../icons/smile.png'

const Post = () => {
    return (
        <div className={classes.post}>
            <div className={classes.post_avatar_nickname}>
                <span>
                    <img className={classes.post_avatar} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Robert_Darwin.jpg/150px-Robert_Darwin.jpg" alt="avatar_img"></img>
                </span>
                <span className={classes.post_nickname}>nickname</span>
            </div>

            <div >
                <img className={classes.post_image} alt="postimg" src="https://ethnomir.ru/upload/medialibrary/6b3/1.jpg"></img>
            </div>

            <div className={classes.post_actions}>
                <span>
                    <img src={like} alt="like_post"/>
                </span>
                <span>
                    <img src={comment} alt="commit_post"/>
                </span>
                <span>
                    <img src={chat} alt="repost_post"/>
                </span>
            </div>

            <div> likes: 10</div>

            <div className={classes.post_comments}>description</div>

            <div className={classes.post_userComment}>
                <img src={smile} alt="cuse_emoji"/>
                <input type='text' placeholder="Leave comment"></input>
                <button >Add comment</button>
            </div>

        </div>
    )
}

export default Post;