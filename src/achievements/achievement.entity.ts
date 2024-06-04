import { AllowNull, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { User } from "src/users/user.entity"


@Table({
    tableName: "achievements",
    timestamps: true
})

export class Achievement extends Model {
    @AllowNull(true)
    @Column({ type: DataType.STRING })
    title: string

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    name: string

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    link: string

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    description: string

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number
}
