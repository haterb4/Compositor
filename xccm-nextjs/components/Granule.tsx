import React from 'react'
import { useDrag } from 'react-dnd'

interface GranuleProps {
    text: string;
    title: string;
}

const Granule = ({ text, title }: GranuleProps) => {
    const [{ opacity }, dragRef] = useDrag(
        () => ({
          type: 'granule',
          item: { text, title },
          collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1
          })
        }),
        []
    )
    return (
        <div ref={dragRef} style={{ opacity }} className='w-full border shadow-md rounded-lg p-4 my-4'>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <div>{text}</div>
        </div>
    )
}

export default Granule
