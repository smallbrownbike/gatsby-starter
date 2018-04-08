import React from 'react'
const ReactMarkdown = require('react-markdown')

const IndexPage = props => {
  const md = props.pathContext.desc.content
  return <ReactMarkdown escapeHtml={false} source={md} />
}

export default IndexPage
