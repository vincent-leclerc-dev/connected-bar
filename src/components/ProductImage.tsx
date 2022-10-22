/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

interface ProductImageProps {
  url: string
  alt?: string
}
export const ProductImage: React.FC<ProductImageProps> = (props) => {
  return <img className='rounded-circle' src={props.url} alt={props.alt} />
}
