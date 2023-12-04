export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((el) => el.location === city)
    .map((el) => ({
      ...el,
      grade:
        (newGrades.find((obj) => obj.studentId === el.id) || {}).grade || 'N/A',
    }));
}
