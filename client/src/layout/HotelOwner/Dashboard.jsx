import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const data = [
    { name: "Single", value: 10 },
    { name: "Double", value: 15 },
    { name: "Suite", value: 5 },
  ];

  const COLORS = ["#34d399", "#60a5fa", "#fbbf24"];

  return (
    <div className="bg-base-100 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Room Type Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={100}>
            {data.map((_, i) => (
              <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
