import classes from './Story.module.css';

const Story = (props) => {
    return (
        <div>
            <div className={classes.ava}>
                <img className={classes.avaImg} src={props.avaImg} alt="ava"/>
            </div>
            <div className={classes.name}>
                {props.name}
            </div>
        </div>
    )
}

export default Story;