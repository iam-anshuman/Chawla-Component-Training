import React from "react"

type ContainerProps = {
    children : React.ReactNode
}

function Container({children}: ContainerProps) {
  return (
    <div className="w-full block px-10">
        {children}
    </div>
  )
}

export default Container