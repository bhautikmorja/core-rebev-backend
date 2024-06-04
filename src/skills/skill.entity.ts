import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { User } from "src/users/user.entity"


@Table({
    tableName:"skills",
    timestamps:true
})

export class Skill extends Model {
    @AllowNull(false)
    @Column({type:DataType.STRING})
    name:string

    @AllowNull(false)
    @Column({type:DataType.INTEGER})
    rate:number
    
    @AllowNull(false)
    @Column({type:DataType.STRING})
    type:string

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number
   
}
