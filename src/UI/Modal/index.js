import React, { useState } from 'react'
import { Wrapper } from '../Utility'
import { Modal } from './Modal'
import Button from '../Buttons/Button'

export const ModalPage = () => {
  const [showModal, setShowMadal] = useState(false);

  const handleClick = () => {
    setShowMadal(true);
  };

  const handleClose = () => {
    setShowMadal(false);
  }

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar} >
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  )

  return (
    <Wrapper>
      <div>ModalPage</div>
      <Button onClick={handleClick} primary>Open Modal</Button>
      {showModal && modal}

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate eu scelerisque felis imperdiet proin fermentum. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Duis ut diam quam nulla porttitor. Ullamcorper eget nulla facilisi etiam. Suspendisse faucibus interdum posuere lorem. In cursus turpis massa tincidunt. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Dictum fusce ut placerat orci nulla </p>pellentesque. Aenean sed adipiscing diam donec adipiscing tristique.

      <p>Risus sed vulputate odio ut enim blandit volutpat. Vel facilisis volutpat est velit egestas dui id. Amet nisl purus in mollis nunc sed id semper risus. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Eget dolor morbi non arcu. Dignissim convallis aenean et tortor at risus. Tellus orci ac auctor augue. Viverra adipiscing at in tellus integer. Sit amet mauris commodo quis. Eu lobortis elementum nibh tellus molestie nunc non blandit. Arcu bibendum at varius vel.</p>

      <p>Ante metus dictum at tempor commodo ullamcorper a. Et leo duis ut diam quam nulla porttitor. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Varius quam quisque id diam vel. Sed turpis tincidunt id aliquet. In iaculis nunc sed augue. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Pellentesque id nibh tortor id aliquet lectus proin nibh. Odio tempor orci dapibus ultrices in iaculis. Porta non pulvinar neque laoreet suspendisse. Facilisis volutpat est velit egestas dui id ornare arcu odio.</p>

      <p>Aliquet porttitor lacus luctus accumsan tortor posuere ac. Diam maecenas ultricies mi eget mauris. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Felis donec et odio pellentesque diam volutpat. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Ultrices sagittis orci a scelerisque purus semper eget duis at. Velit egestas dui id ornare arcu. Vivamus at augue eget arcu dictum varius duis at. Lobortis scelerisque fermentum dui faucibus in. A condimentum vitae sapien pellentesque habitant morbi tristique. Pretium lectus quam id leo in vitae turpis massa sed. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Suspendisse faucibus interdum posuere lorem ipsum dolor. Tincidunt arcu non sodales neque sodales ut etiam. Viverra orci sagittis eu volutpat odio. Venenatis tellus in metus vulputate eu. Id consectetur purus ut faucibus. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Diam maecenas ultricies mi eget mauris pharetra et.</p>

      <p>Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Sem nulla pharetra diam sit. Eu sem integer vitae justo eget. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Arcu vitae elementum curabitur vitae nunc sed velit. Vestibulum mattis ullamcorper velit sed ullamcorper. Mi tempus imperdiet nulla malesuada pellentesque elit. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Cras adipiscing enim eu turpis. Id aliquet risus feugiat in ante metus dictum at. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Amet porttitor eget dolor morbi. Placerat in egestas erat imperdiet sed euismod nisi porta lorem. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Nulla facilisi morbi tempus iaculis urna id. Vitae elementum curabitur vitae nunc.</p>
      <Button onClick={handleClick} primary>Open Modal</Button>

    </Wrapper>

  )
}
