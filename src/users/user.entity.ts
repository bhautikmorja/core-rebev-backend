import { AllowNull, Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model {
  @AllowNull(false)
  @Column({ type: DataType.STRING })
  name: string;
}
