function gradingStudents(grades) {
  const next = val =>
    val % 5 != 0 ? Math.trunc(val / 5) * 5 + 5 : Math.trunc(val / 5) * 5;

  const grade = val => (next(val) - val < 3 && val >= 38 ? next(val) : val);

  let results = grades.map(g => grade(g));

  return results;
}
