import { faFileExcel, faFilePowerpoint, faFileWord, faFolder } from "@fortawesome/free-solid-svg-icons"

const LocalProjects = [
    {
        name: 'app',
        id: '1',
        fileIcon: faFileExcel,
        folderIcon: faFolder,
        ressourcesid: '1',
        exportid: '1',
        configurationsid: '1',
        fgClass: 'text-green-600',
        bgClass: 'bg-green-200',
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
        name: 'app',
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
        name: 'app',
        id: '1',
        fileIcon: faFilePowerpoint,
        folderIcon: faFolder,
        ressourcesid: '1',
        exportid: '1',
        configurationsid: '1',
        fgClass: 'text-orange-900',
        bgClass: 'bg-orange-400',
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

export default LocalProjects