const students = [
    { name: "Alice", score: 92 },
    { name: "Bob", score: 65 },
    { name: "Charlie", score: 45 },
    { name: "Diana", score: 88},
    { name: "Eve", score: 30 },
    { name: "Frank", score: 72 },
];

function categorizeStudents(students) {
    const result = {
        toppers: [],
        avergae: [],
        belowAverage: []
    };

    for(const student of students){
        if( student.score >= 80){
            result.toppers.push(student.name);
        } else if (student.score >= 50 && student.score < 80){
            result.avergae.push(student.name);
        } else {
            result.belowAverage.push(student.name);
        }
    }
    return result;
}


console.log(categorizeStudents(students));