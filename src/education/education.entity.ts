import { AllowNull, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/user.entity";

@Table({
    tableName: "education",
    timestamps: true
})
export class Education extends Model {
    @AllowNull(true)
    @Column({ type: DataType.STRING })
    name: string

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    degree: string

    @AllowNull(true)
    @Column({ type: DataType.DATE })
    startDate: Date

    @AllowNull(true)
    @Column({ type: DataType.DATE })
    endDate: Date

    @AllowNull(true)
    @Column({ type: DataType.BOOLEAN })
    isPresent: boolean

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number
}
