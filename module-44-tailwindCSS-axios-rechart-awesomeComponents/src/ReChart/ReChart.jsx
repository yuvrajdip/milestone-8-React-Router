import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const ReChart = () => {

  const students = [
    {
      "id": 1,
      "name": "John Smith",
      "physics": 95,
      "chemistry": 90,
      "math": 88
    },
    {
      "id": 2,
      "name": "Emma Johnson",
      "physics": 85,
      "chemistry": 88,
      "math": 92
    },
    {
      "id": 3,
      "name": "Michael Brown",
      "physics": 78,
      "chemistry": 75,
      "math": 80
    },
    {
      "id": 4,
      "name": "Olivia Davis",
      "physics": 92,
      "chemistry": 87,
      "math": 95
    },
    {
      "id": 5,
      "name": "Sophia Wilson",
      "physics": 88,
      "chemistry": 84,
      "math": 90
    },
    {
      "id": 6,
      "name": "Liam Anderson",
      "physics": 75,
      "chemistry": 82,
      "math": 78
    },
    {
      "id": 7,
      "name": "Ava Martinez",
      "physics": 90,
      "chemistry": 92,
      "math": 88
    },
    {
      "id": 8,
      "name": "Noah Taylor",
      "physics": 84,
      "chemistry": 89,
      "math": 91
    },
    {
      "id": 9,
      "name": "Isabella Clark",
      "physics": 86,
      "chemistry": 80,
      "math": 85
    },
    {
      "id": 10,
      "name": "Mason White",
      "physics": 91,
      "chemistry": 94,
      "math": 89
    }
  ]


  return (
    <>
      {/* without responsiveness */}
      <LineChart width={600} height={300} data={students}>
        <Line type="monotone" dataKey="physics" stroke="#8884d8" />
        <Line type="monotone" dataKey="math" stroke="seagreen" />
        <Line type="monotone" dataKey="chemistry" stroke="yellow" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="id" />
        <YAxis />
      </LineChart>

      {/* with responsiveness */}
      <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={students}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line connectNulls type="monotone" dataKey="physics" stroke="red" fill="#8884d8" />
            <Line connectNulls type="monotone" dataKey="math" stroke="green" fill="#8884d8" />
            <Line connectNulls type="monotone" dataKey="chemistry" stroke="blue" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
    </>
  );
};

export default ReChart;