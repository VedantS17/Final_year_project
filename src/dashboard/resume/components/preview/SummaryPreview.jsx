import React from 'react'

function SummaryPreview({resumeInfo}) {
  return (
    <p className='text-xs'>
        {resumeInfo?.Summary}
    </p>
  )
}

export default SummaryPreview