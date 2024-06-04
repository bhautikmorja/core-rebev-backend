import { Skill } from "./skill.entity";


export const skillsProvider = [
    {
        provide: 'SKILLS_REPOSITORY',
        useValue: Skill,
    }
]