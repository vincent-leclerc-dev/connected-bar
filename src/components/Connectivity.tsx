import React, { Component } from 'react'

export class Connectivity extends Component {
  private baseUrl = 'http://www.test.com'
  private isOnline = false

  componentDidMount() {
    this.onlineCheck()
  }

  onlineCheck() {
    const xhr = new XMLHttpRequest()
    return new Promise((resolve, reject) => {
      xhr.onload = () => {
        // Set online status
        this.isOnline = true
        resolve(true)
      }
      xhr.onerror = () => {
        // Set online status
        this.isOnline = false
        reject(false)
      }
      xhr.open('GET', this.baseUrl, true)
      xhr.send()
    })
  }

  clickHandler() {
    this.onlineCheck()
      .then(() => {
        // Has internet connection, carry on
      })
      .catch(() => {
        // Has no internet connection, let the user know
        alert('Sorry, no internet.')
      })
  }
}
