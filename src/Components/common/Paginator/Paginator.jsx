import React from "react";
import s from './Paginator.module.css';

let Paginator = (props) => {

    let pagesAmount = Math.ceil(props.usersAmount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesAmount; i++) {

        pages.push(i);
    }

    return (

        <div className={s.pagesNums}>
            
            {pages.map((page, i) => {

                return <span key={i} className={props.currentPage === page ? s.selectedPageNum : s.pageNum} onClick={(event) => { 
                    event.preventDefault();
                    props.changingPage(page)}}>{page}</span>
            })}
        </div>
    )
}

export default Paginator;