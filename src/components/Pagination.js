import { Button } from 'antd';
import React from 'react'

export const Pagination = ({postsPerPage, totalPosts , paginate}) => {
  
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts /  postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
    <>
        <ul className="pagination d-flex justify-content-center">
            {
                pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <Button onClick={() => paginate(number)}  className='page-link'>
                            {number}
                        </Button>
                    </li>
                ))
            }
        </ul>
    </>
  )
}
