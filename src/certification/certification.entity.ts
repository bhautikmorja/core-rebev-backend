import { AllowNull, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { User } from "src/users/user.entity"

@Table({
    tableName: "certifications",
    timestamps: true
})
export class Certification extends Model {
    @AllowNull(true)
    @Column({ type: DataType.STRING })
    name: string

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    link: string

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    organization: string

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    description: string

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number
}
