import React from "react";
import Paginator from "../common/Paginator/Paginator";
import { User } from "./User";

let Users = ({currentPage, changingPage, usersAmount, pageSize, ...props}) => {

    let pagesAmount = Math.ceil(props.usersAmount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesAmount; i++) {

        pages.push(i);
    }

    return (

    <div>

        <Paginator currentPage={currentPage} changingPage={changingPage} usersAmount={usersAmount} pageSize={pageSize}/>
        
        <div>
            
            {
                
                props.users.map(user => <User key={user.id}
                                              user={user}
                                              isAuth={props.isAuth}
                                              isFollowingInProcess={props.isFollowingInProcess}
                                              unfollow={props.unfollow}
                                              follow={props.follow}/>

                )
            }
        </div>
        
    </div>)
}

export default Users;


