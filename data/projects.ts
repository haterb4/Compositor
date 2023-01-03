import { faFileExcel, faFilePdf, faFileWord, faFolder } from "@fortawesome/free-solid-svg-icons"

const Projects = [
    {
        name: 'Projet 1',
        id: '1',
        fileIcon: faFileWord,
        folderIcon: faFolder,
        ressourcesid: '1',
        exportid: '1',
        configurationsid: '1',
        fgClass: 'text-light-blue-500',
        bgClass: 'bg-light-blue-100',
        description: "Description of Project 1",
        createdAt: "05/11/2022",
        sizes: {
            file: "5.2MB",
            configurations: "5.2MB",
            ressourses: "5.2MB",
            export: "5.2MB"
        }

    },
    {
        name: 'Projet 2',
        id: '1',
        fileIcon: faFileExcel,
        folderIcon: faFolder,
        ressourcesid: '1',
        exportid: '1',
        configurationsid: '1',
        fgClass: 'text-green-200',
        bgClass: 'bg-green-900',
        description: "Description of Project 1",
        createdAt: "05/11/2022",
        sizes: {
            file: "5.2MB",
            configurations: "5.2MB",
            ressourses: "5.2MB",
            export: "5.2MB"
        }

    },
    {
        name: 'Projet 3',
        id: '1',
        fileIcon: faFilePdf,
        folderIcon: faFolder,
        ressourcesid: '1',
        exportid: '1',
        configurationsid: '1',
        fgClass: 'text-red-500',
        bgClass: 'bg-red-900',
        description: "Description of Project 1",
        createdAt: "05/11/2022",
        sizes: {
            file: "5.2MB",
            configurations: "5.2MB",
            ressourses: "5.2MB",
            export: "5.2MB"
        }

    }
]

export default Projects