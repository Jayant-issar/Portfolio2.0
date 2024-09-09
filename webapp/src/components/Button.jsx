
import React from 'react'

const Button = ({name,isBeam=false,containerClass}) => {
  return (
    <button
    className={`btn ${containerClass}`}
    >
        {isBeam&&(
            <span className=' relative flex h-3 w-3'>
                <span className=' btn-ping'>
                    <span className=' btn-ping_dot'>

                    </span>

                </span>

            </span>
        )}
        {name}
    </button>
  )
}

export default Button