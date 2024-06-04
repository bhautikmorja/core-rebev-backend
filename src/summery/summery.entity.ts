import { AllowNull, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/user.entity";


@Table({
    tableName: 'summaries',
    timestamps: true,
})

export class Summery extends Model {
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    description: string;

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    userId: number;

}
