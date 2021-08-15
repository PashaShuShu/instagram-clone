import classes from './Stories.module.css';
import Story from './story/Story';

const Stories = () => {

    let stories = {
        storiesData: [
            {
                userId: 0,
                name: "susu",
                avaImg: "https://img.discogs.com/sLFVaT2GLu08bc1eUSc8LxW04KQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-5931298-1535633146-8914.jpeg.jpg",
                storiesData: [],
            },
            {
                userId: 1,
                name: "gugu",
                avaImg: "https://img.discogs.com/sLFVaT2GLu08bc1eUSc8LxW04KQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-5931298-1535633146-8914.jpeg.jpg",
                storiesData: [],
            },
            {
                userId: 2,
                name: "gug",
                avaImg: "https://img.discogs.com/sLFVaT2GLu08bc1eUSc8LxW04KQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-5931298-1535633146-8914.jpeg.jpg",
                storiesData: [],
            },
            {
                userId: 3,
                name: "gug",
                avaImg: "https://img.discogs.com/sLFVaT2GLu08bc1eUSc8LxW04KQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-5931298-1535633146-8914.jpeg.jpg",
                storiesData: [],
            },
            {
                userId: 4,
                name: "gug",
                avaImg: "https://img.discogs.com/sLFVaT2GLu08bc1eUSc8LxW04KQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-5931298-1535633146-8914.jpeg.jpg",
                storiesData: [],
            },
            {
                userId: 5,
                name: "gug",
                avaImg: "https://img.discogs.com/sLFVaT2GLu08bc1eUSc8LxW04KQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-5931298-1535633146-8914.jpeg.jpg",
                storiesData: [],
            },
            {
                userId: 6,
                name: "gug",
                avaImg: "https://img.discogs.com/sLFVaT2GLu08bc1eUSc8LxW04KQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-5931298-1535633146-8914.jpeg.jpg",
                storiesData: [],
            },
            {
                userId: 7,
                name: "gug",
                avaImg: "https://img.discogs.com/sLFVaT2GLu08bc1eUSc8LxW04KQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-5931298-1535633146-8914.jpeg.jpg",
                storiesData: [],
            },
            {
                userId: 8,
                name: "gug",
                avaImg: "https://img.discogs.com/sLFVaT2GLu08bc1eUSc8LxW04KQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-5931298-1535633146-8914.jpeg.jpg",
                storiesData: [],
            }

        ]
    };

    let storiesLent = stories.storiesData.map(story => {
        return (
            <div className={classes.story} >
                <Story
                    key={story.userId}
                    userId={story.userId}
                    name={story.name}
                    avaImg={story.avaImg}
                    storiesData={story.storiesData}
                />
            </div>
        )
    })


    return (
        <div className={classes.storyes}>
            {storiesLent}
        </div>
    )
}

export default Stories;