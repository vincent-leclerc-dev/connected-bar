import React from 'react'
import styled, { keyframes } from 'styled-components'

import { Card } from 'react-bootstrap'

const spin = keyframes`
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
`

const SpinnerAnimation = styled.div`
  border: 10px solid #eee;
  border-top: 10px solid #ccc;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  animation: ${spin} 2s ease infinite;
  margin: 0 auto;
`

export const Spinner = () => {
  return (
    <Card className='panel panel-default'>
      <Card.Body>
        <div className='wrapper'>
          <SpinnerAnimation />
        </div>
      </Card.Body>
    </Card>
  )
}
