import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faKey } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft, faKey)

export class ButtonBack extends Component {
  render() {
    const alertClass = classNames('btn', 'btn-primary')

    return (
      <Link to='/'>
        <button className={alertClass}>
          <FontAwesomeIcon icon='chevron-left' />
        </button>
      </Link>
    )
  }
}
