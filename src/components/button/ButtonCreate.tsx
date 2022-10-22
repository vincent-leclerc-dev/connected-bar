import { Component } from 'react'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faPlus, faKey)

export class ButtonCreate extends Component {
  render() {
    return (
      <Link to='/'>
        <button className='btn btn-success create'>
          <FontAwesomeIcon icon='plus' />
        </button>
      </Link>
    )
  }
}
