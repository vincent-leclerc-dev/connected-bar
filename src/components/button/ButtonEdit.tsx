import { Component } from 'react'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faPen, faKey)

export class ButtonEdit extends Component {
  render() {
    return (
      <Link to='/'>
        <button className='btn btn-warning list'>
          <FontAwesomeIcon icon='pen' />
        </button>
      </Link>
    )
  }
}
