import {
  Table,
  Column,
  Model,
  AllowNull,
  BelongsToMany,
} from "sequelize-typescript";
import { InferAttributes, InferCreationAttributes } from "sequelize";
import { DataType } from "sequelize-typescript";
import { Student } from "./student";
import StudentCourse from "./studentCourse";
export
@Table({ timestamps: false })
class Course extends Model<
  InferAttributes<Course>,
  InferCreationAttributes<Course>
> {
  @AllowNull(false)
  @Column(DataType.STRING)
  title!: string;
  description?: string;
  courseCode!: string;

  @BelongsToMany(() => Student, () => StudentCourse)
  students: Array<Student & { StudentCourse: StudentCourse }> = [];
}
