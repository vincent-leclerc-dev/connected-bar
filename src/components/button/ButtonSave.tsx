import { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSave, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faSave, faKey)

export class ButtonSave extends Component {
  render() {
    return (
      <button className='btn btn-success button is-link'>
        <FontAwesomeIcon icon='save' />
      </button>
    )
  }
}
