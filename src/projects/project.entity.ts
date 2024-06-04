import { AllowNull, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Stack } from "src/stack/stack.entity";
import { User } from "src/users/user.entity";

@Table({
    tableName:"projects",
    timestamps:true
})
export class Project extends Model {
    @AllowNull(true)
    @Column({ type: DataType.STRING })
    title: string;

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    description: string;

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    features: string;

    @AllowNull(true)
    @Column({ type: DataType.INTEGER })
    level: number;

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    gitHubLink: string;

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    deployedLink: string;

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    otherLink: string;

    @AllowNull(true)
    @Column({ type: DataType.INTEGER })
    teamSize: number;

    @AllowNull(true)
    @Column({ type: DataType.DATE })
    startDate: Date;

    @AllowNull(true)
    @Column({ type: DataType.DATE })
    endDate: Date;

    @AllowNull(true)
    @Column({ type: DataType.BOOLEAN })
    isPresent: boolean;

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column({type:DataType.INTEGER})
    userId: number

    @HasMany(()=>Stack)
    stacks:Stack[]
}
