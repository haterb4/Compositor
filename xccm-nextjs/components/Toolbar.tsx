import React from 'react'
import { AiOutlineBold, AiOutlineAlignCenter } from 'react-icons/ai'

interface ToolbarProps {
    handleInlineStyle?: any;
    handleAlignment?: any;
}
const Toolbar: React.FC<ToolbarProps> = ({handleInlineStyle, handleAlignment}) => {
  return (
    <div className="w-full flex items-center justify-end px-4">
        <button onClick={() => handleInlineStyle('BOLD')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <AiOutlineBold />
        </button>
        <button onClick={() => handleAlignment('center')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <AiOutlineAlignCenter />
        </button>
    </div>
  )
}

export default Toolbar
