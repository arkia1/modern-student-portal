import {
  Table,
  Column,
  Model,
  AllowNull,
  BelongsToMany,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";

import { InferAttributes, InferCreationAttributes } from "sequelize";
import { DataType } from "sequelize-typescript";
import { Course } from "./course";
import StudentCourse from "./studentCourse";
export
@Table({ timestamps: false })
class Student extends Model<
  InferAttributes<Student>,
  InferCreationAttributes<Student>
> {
  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;
  surname!: string;
  email!: string;
  password!: string;

  @AllowNull(false)
  @Column(DataType.NUMBER)
  age!: number;
  studentNumber!: number;

  @BelongsToMany(() => Course, () => StudentCourse)
  courses: Array<Course & { StudentCourse: StudentCourse }> = [];
}
