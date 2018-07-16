import React from 'react'

const Article = (props) => {
  // Use the publishing timestamp to create a readable d-m-y format
  let publishingDate = String(new Date(props.articleInfo.publishedAt)).slice(3, 10)

  return (
    <div className='article bg-light-gray'>
      <div className='f6 avenir ph2'>{ publishingDate }</div>
      <div className='f3 avenir pa2'>{ props.articleInfo.title }</div>
      <div className='f5 avenir pa2 i'>{ props.articleInfo.description }</div>
    </div>
  )
}

export default Article
