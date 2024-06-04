import { Summery } from "./summery.entity";


export const summeryProvider = [
  {
    provide: 'SUMMERY_REPOSITORY',
    useValue: Summery,
  },
];
