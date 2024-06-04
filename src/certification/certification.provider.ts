import { Certification } from "./certification.entity";



export const certificateProvider = [
    {
        provide: 'CERTIFICATE_REPOSITORY',
        useValue: Certification
    }
]