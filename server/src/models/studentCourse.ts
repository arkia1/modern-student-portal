import { Table, Column, Model, ForeignKey } from "sequelize-typescript";
import { Student } from "./student";
import { Course } from "./course";
import { DataType } from "sequelize-typescript";

@Table
class StudentCourse extends Model<StudentCourse> {
  @ForeignKey(() => Student)
  @Column(DataType.NUMBER)
  studentId!: number; // Use '!' to indicate that this property will always be defined

  @ForeignKey(() => Course)
  @Column(DataType.NUMBER)
  courseId!: number; // Use '!' to indicate that this property will always be defined
}

export default StudentCourse;
