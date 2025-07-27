export type Experience = {
    id: number;
    years: string;
    role: string;
    company: string;
    link: string;
    description: string;
    tags: string[];
};

export type Project = {
    id: number;
    name: string;
    link: string;
    previewImage: string;
    description: string;
    tags: string[];
    github: string;
};