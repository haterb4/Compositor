import { IconProp } from "@fortawesome/fontawesome-svg-core"

export interface ProjectType {
    name: String
    id: String,
    fileIcon: IconProp,
    folderIcon: IconProp,
    ressourcesid: String,
    exportid: String,
    configurationsid: String,
    fgClass: String,
    bgClass: String,
    description: String,
    createdAt: String
    sizes: {
        file: String,
        configurations: String,
        ressourses: String,
        export: String
    }
}