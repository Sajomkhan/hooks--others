import React, { memo } from 'react'

const Massage = ({numberOfMassage}) => {  //set props: mumberOgMassage
    console.log('massage rendering');
  return (
    <div>Send {numberOfMassage} Massage</div> //set props: mumberOgMassage
  )
}

export default memo(Massage)   // memo()