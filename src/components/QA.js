import React, {useState} from 'react'
import {BiPlus, BiMinus} from 'react-icons/bi'

const QA = ({qa}) => {
  const [collapse, setCollapse] = useState(true)
  return (
    <div className='qa'>
        <div className='qa_row1'>
            <div className='q'>{qa.title}</div>
            <div className='iconCon' onClick={()=>setCollapse(prev=>!prev)}>
              {collapse?<BiPlus className='plus' />:<BiMinus className='minus'/>}
            </div>
        </div>
        {collapse || <div className='qa_row2'>{qa.info}</div>}
    </div>
  )
}

export default QA