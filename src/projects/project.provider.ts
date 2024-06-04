import { Project } from "./project.entity";

export const projectProvider = [
    {
        provide: 'PROJECT_REPOSITORY',
        useValue: Project,
    },
];