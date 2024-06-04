import { Achievement } from "./achievement.entity";

export const achievementsProvider = [
    {
        provide: 'ACHIEVEMENTS_REPOSITORY',
        useValue: Achievement
    }
]