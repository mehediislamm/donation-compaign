import {
    Pie,
    PieChart,
    Tooltip,
    Legend,
    Label,
    ResponsiveContainer,
    Cell,
  } from "recharts";

  
  const Statistics = () => {
    const getStoredDonation = () => {
        const storedDonation = localStorage.getItem("donate");
        if (storedDonation) {
          return JSON.parse(storedDonation);
        }
        return [];
      };
    const donations = getStoredDonation();
    const myDonation = donations.length;
    // console.log(totalDonations);
    const data = [
      { id: 0, name: "My Donation", value: myDonation, label: "My Donation" },
      { id: 1, name: "Total Donation", value: 12, label: "Total Donation" },
    ];
  
    const COLORS = ["#00C49F", "#FF444A"];
  
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      index,
    }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
  
    return (
      <>
        <section>
          <PieChart className="mx-auto" width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
            <Label></Label>
            <Tooltip></Tooltip>
          </PieChart>
        </section>
      </>
    );
  };
  
  export default Statistics;

  