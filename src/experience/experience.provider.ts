import { Experience } from "./experience.entity";

export const experienceProvider = [
    {
        provide:'EXPERIENCE_REPOSITORY',
        useValue:Experience
    }
]