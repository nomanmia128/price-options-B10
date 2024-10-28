import { LineChart, Line, XAxis, YAxis } from 'recharts';

const LinChart = () => {
    
    const studentData = [
        { name: "Student 1", mathMarks: 45, physicsMarks: 56, chemistryMarks: 62 },
        { name: "Student 2", mathMarks: 78, physicsMarks: 81, chemistryMarks: 74 },
        { name: "Student 3", mathMarks: 88, physicsMarks: 69, chemistryMarks: 85 },
        { name: "Student 4", mathMarks: 52, physicsMarks: 47, chemistryMarks: 58 },
        { name: "Student 5", mathMarks: 61, physicsMarks: 73, chemistryMarks: 67 },
        { name: "Student 6", mathMarks: 74, physicsMarks: 82, chemistryMarks: 79 },
        { name: "Student 7", mathMarks: 69, physicsMarks: 77, chemistryMarks: 80 },
        { name: "Student 8", mathMarks: 85, physicsMarks: 88, chemistryMarks: 91 },
        { name: "Student 9", mathMarks: 93, physicsMarks: 95, chemistryMarks: 89 },
        { name: "Student 10", mathMarks: 57, physicsMarks: 63, chemistryMarks: 70 }
      ];
      
      

    return (
        <div>
            <LineChart width={800} height={400} data={studentData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Line dataKey="mathMarks" stroke='red'></Line>
            <Line dataKey={'physicsMarks'} stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default LinChart;