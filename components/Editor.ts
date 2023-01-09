import dynamic from 'next/dynamic'
const Editor  = dynamic(
    () => import('react-draft-wysiwyg').then((module) => module.Editor),
    {
      ssr: false,
    }
)

export default Editor