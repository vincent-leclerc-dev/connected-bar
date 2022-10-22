import { Component } from 'react'
import classNames from 'classnames'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faTrash, faKey)

export class ButtonDelete extends Component {
  render() {
    const btnClass = classNames('btn', 'btn-danger', 'list')

    return (
      <button className={btnClass}>
        <FontAwesomeIcon icon='trash' />
      </button>
    )
  }
}
