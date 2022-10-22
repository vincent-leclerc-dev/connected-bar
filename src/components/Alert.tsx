import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'

const Div = styled.div`
  text-align: center;
`

const Alert = (props: any) => {
  let alertType = ''

  switch (props.type) {
    case 'error':
      alertType = 'alert-danger'
      break
    case 'primary':
      alertType = 'alert-primary'
      break
    case 'secondary':
      alertType = 'alert-secondary'
      break
    case 'success':
      alertType = 'alert-success'
      break
    case 'warning':
      alertType = 'alert-warning'
      break
    case 'light':
      alertType = 'alert-light'
      break
    case 'dark':
      alertType = 'alert-dark'
      break
    default:
      alertType = 'alert-info'
  }

  const alertClass = classNames('alert', alertType)

  return <Div className={alertClass}>{props.message}</Div>
}

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
}

export default Alert
