import { Sequelize } from 'sequelize-typescript';
import { config } from 'dotenv';
import { User } from 'src/users/user.entity';
import { Summery } from 'src/summery/summery.entity';
import { Experience } from 'src/experience/experience.entity';
import { Project } from 'src/projects/project.entity';
import { Stack } from 'src/stack/stack.entity';
import { Education } from 'src/education/education.entity';
import { Certification } from 'src/certification/certification.entity';
import { Achievement } from 'src/achievements/achievement.entity';
import { Skill } from 'src/skills/skill.entity';

config();

export const databaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequlize = new Sequelize({
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        host: process.env.MYSQL_HOST,
        port: +process.env.MYSQL_PORT,
        dialect: 'mysql',
        dialectOptions: {
          dateStrings: true,
          typeCast: true,
        },
      });

      sequlize.addModels([User, Summery, Experience,Project,Stack, Education, Certification, Achievement, Skill]);

      return sequlize;
    },
  },
];
