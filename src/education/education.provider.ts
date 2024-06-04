import { Education } from "./education.entity";


export const educationProvider = [
    {
        provide: 'EDUCATION_REPOSITORY',
        useValue: Education
    }
]