

export interface IFile {
    id: string;
    file: string;

}


export interface ITeacher {
    id: string;
    name: string;

    nationality: string;

    image: IFile;

}



export interface INews {
    id: string;
    name_uz: string;
    name_ru: string;
    name_en: string;
    image: IFile;
}