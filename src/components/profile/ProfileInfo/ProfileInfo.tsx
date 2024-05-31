import classes from './ProfileInfo.module.css';

export function ProfileInfo() {
    return(
    <div>
        <div>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png"
                alt="Logo"/>
        </div>
        <div className={classes.descriptionBlock}>
            ava + desc
        </div>
    </div>
    )
}
