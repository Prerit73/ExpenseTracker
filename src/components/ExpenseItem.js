import React from 'react';
import './ExpenseItem.css'

const ExpenseItem = () => {
    return (
        <div className='expense-item'>
            <div>June 6th 2023</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>$543.56</div>
            </div>
        </div>
    )
}

export default ExpenseItem