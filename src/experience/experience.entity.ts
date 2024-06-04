import { AllowNull, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/user.entity";

@Table({
    tableName:"experience",
    timestamps: true
})
export class Experience extends Model {
    @AllowNull(true)
    @Column({type:DataType.STRING})
    title: string
        
    @AllowNull(true)
    @Column({type:DataType.STRING})
    name: string

    @AllowNull(true)
    @Column({type:DataType.STRING})
    website: string

    @AllowNull(true)
    @Column({type:DataType.DATE})
    startDate: Date

    @AllowNull(true)
    @Column({type:DataType.DATE})
    endDate:Date

    @AllowNull(true)
    @Column({type:DataType.BOOLEAN})
    isPresent: boolean

    @AllowNull(true)
    @Column({type:DataType.STRING})
    responsibilities: string
        
    @ForeignKey(() => User)
    @AllowNull(false)
    @Column({type:DataType.INTEGER})
    userId: number
}
