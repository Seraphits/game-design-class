import React from 'react'
import classNames from 'classnames'


export const Panel = ({children, className, ...rest}) => {
  const finalClassNames = classNames('border rounded p-3 shadow bg-white w-full', className);

  return (
    <div className={finalClassNames} {...rest} >{children} </div>
  )
}
