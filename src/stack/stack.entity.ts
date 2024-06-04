import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Project } from "src/projects/project.entity";

@Table({
    tableName:"stacks",
    timestamps:true
})
export class Stack extends Model{
    @AllowNull(false)
    @Column({type:DataType.STRING})
    name:string

    @ForeignKey(()=>Project)
    @AllowNull(false)
    @Column({type:DataType.INTEGER})
    projectId:number

    @BelongsTo(()=>Project)
    project:Project
}
