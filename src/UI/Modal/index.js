import React, { useState } from 'react'
import { Wrapper } from '../Utility'
import { Modal } from './Modal'
import Button from '../Buttons/Button'

export const ModalPage = () => {
  const [showModal, setShowMadal] = useState(false);

  const handleClick = () => {
    setShowMadal(true);
  };

  return (
    <Wrapper>
      <div>ModalPage</div>
      <Button onClick={handleClick} >Open Modal</Button>
      {showModal && <Modal/>}
    </Wrapper>

  )
}
