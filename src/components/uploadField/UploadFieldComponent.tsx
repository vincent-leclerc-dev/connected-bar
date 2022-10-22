import React, { Component } from 'react'
import { Props } from './Props'
import { State } from './State'
import { FileUploaderPresentationalComponent } from './FileUploaderPresentationalComponent'

export default class FileUploader extends Component<Props, State> {
  static counter = 0
  fileUploaderInput: HTMLElement | null = null

  constructor(props: Props) {
    super(props)
    this.state = { dragging: false, file: null }
  }

  dragEventCounter = 0
  dragenterListener = (event: React.DragEvent<HTMLDivElement>) => {
    this.overrideEventDefaults(event)
    this.dragEventCounter++
    if (event.dataTransfer.items && event.dataTransfer.items[0]) {
      this.setState({ dragging: true })
    } else if (event.dataTransfer.types && event.dataTransfer.types[0] === 'Files') {
      // This block handles support for IE - if you're not worried about
      // that, you can omit this
      this.setState({ dragging: true })
    }
  }

  dragleaveListener = (event: React.DragEvent<HTMLDivElement>) => {
    this.overrideEventDefaults(event)
    this.dragEventCounter--

    if (this.dragEventCounter === 0) {
      this.setState({ dragging: false })
    }
  }

  dropListener = (event: React.DragEvent<HTMLDivElement>) => {
    this.overrideEventDefaults(event)
    this.dragEventCounter = 0
    this.setState({ dragging: false })

    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      this.setState({ file: event.dataTransfer.files[0] })
    }
  }

  overrideEventDefaults = (event: Event | React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
  }

  onSelectFileClick = () => {
    this.fileUploaderInput && this.fileUploaderInput.click()
  }

  onFileChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({ file: event.target.files[0] })
    }
  }

  componentDidMount() {
    window.addEventListener('dragover', (event: Event) => {
      this.overrideEventDefaults(event)
    })
    window.addEventListener('drop', (event: Event) => {
      this.overrideEventDefaults(event)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('dragover', this.overrideEventDefaults)
    window.removeEventListener('drop', this.overrideEventDefaults)
  }

  render() {
    return (
      <FileUploaderPresentationalComponent
        dragging={this.state.dragging}
        file={this.state.file}
        onSelectFileClick={this.onSelectFileClick}
        onDrag={this.overrideEventDefaults}
        onDragStart={this.overrideEventDefaults}
        onDragEnd={this.overrideEventDefaults}
        onDragOver={this.overrideEventDefaults}
        onDragEnter={this.dragenterListener}
        onDragLeave={this.dragleaveListener}
        onDrop={this.dropListener}
      >
        <input
          ref={(el) => (this.fileUploaderInput = el)}
          type='file'
          className='file-uploader__input'
          onChange={this.onFileChanged}
        />
      </FileUploaderPresentationalComponent>
    )
  }
}

/*
import * as React from "react"
import { css } from 'emotion'

const inputField = css({
	height: 0,
	width: 0
  });
  
  const dropZone = css({
	padding: '10px',
	marginBottom: '10px',
	borderStyle: 'dashed',
	borderSize: '2px',
	borderColor: 'grey',
	background: '#eee'
  
  });

  type handleFiles = (files: string[]) => void;
  type uploadImage = (images: string[]) => void;
  type handleFileSelect = (image: string) => void;

interface UploadFieldState {
	targetId : string,
	common: string[ upload : [] ]
	handleFiles : handleFiles,
	uploadImage : uploadImage,
	handleFileSelect: handleFileSelect
}

class UploadFieldComponent extends React.Component<UploadFieldState> {
	
	state: UploadFieldState = {
		targetId: '',
		common: { upload : []},
		handleFiles: () => { },
		uploadImage: () => { },
		handleFileSelect: () => {}
	};

	render() {
		if(this.state.targetId === null || this.state.targetId === ""){
			return null;
		  }
	  
		  if(this.state.common && this.state.common.upload && this.state.common.upload.image){
			return (
			  <img className="img-circle" src={this.state.common.upload.image.src}
			  alt={this.state.common.upload.image.alt} />
			)
		  }

		return (
			<div>
				<label htmlFor="ingredientImageUpload">Updload an image</label>
				<div className={dropZone} id="zone">
				<div className="form_line">
					<div className="form_controls">
					<div className="upload_button_holder">
						<input type="file" id="inputFile" multiple accept="image/*"
						className={inputField}
						onChange={(e) => this.state.handleFiles(e.target.files)} />
						<a href="" id="fileSelect"
						onClick={(e) => this.state.handleFileSelect(e)}
						>Select some files</a>
					</div>
					</div>
				</div>
				</div>
			</div>
		)
	}
}

export default UploadFieldComponent
*/
