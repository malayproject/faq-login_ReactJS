import React from 'react'
import Data from './Data'
import QA from './QA'


const FAQs = () => {
    return (
        <div className='faqs'>
            {Data.map(qa=>{
                return (<QA qa={qa}/>)
            })}
        </div>
    )
}

export default FAQs
