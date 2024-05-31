import styles from './Users.module.css'
import {UserContainerProps} from "./UsersContainer";

type UsersPropsComponent = {
    totalUsersCount: number,
    onPageChanged: (e: number) => void,
    pageSize: number,
    currentPage: number,
    users: UserContainerProps[],
    unFollow: (e: number) => void,
    follow: (e: number) => void
}

export const Users = ({totalUsersCount, onPageChanged, pageSize, currentPage, users, unFollow, follow}: UsersPropsComponent) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    console.log(users)
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <>
            <div>
                {pages.map(p =>
                    <span className={currentPage === p ? styles.selectedPage : ''} onClick={() => onPageChanged(p) } key={p}>{p}</span>
                )}

            </div>
            {
                users?.length && users.map((el: any) =>
                    <div key={el.id}>
                        <span>
                            <div><img className={styles.userPhoto}
                                      src={el.photos.small ? el.photos.small : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"}
                                      alt={el.photos.small}/></div>
                            <div>
                                {el.followed ? <button onClick={() => unFollow(el.id)}>Unfollow</button> :
                                    <button onClick={() => follow(el.id)}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>
                                    {el.name}
                                </div>
                                <div>
                                    {el.status}
                                </div>
                            </span>
                            <span>
                                <div>
                                    {"el.location.country"}
                                </div>
                                <div>
                                    {"el.location.city"}
                                </div>
                            </span>
                        </span>
                    </div>
                )
            }
        </>
    )
};