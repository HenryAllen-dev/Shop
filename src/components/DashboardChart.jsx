import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { initData } from "../data/dataDefaults";
import { useTheme } from "@emotion/react";
const DashboardChart = () => {
  const { primary, secondary } = useTheme().palette;
  const data = initData.charts;
  return (
    <Grid container>
      <Grid height="400px" xs={12} md={6}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <Area
              type="monotone"
              dataKey="Sell"
              stroke={primary.main}
              fill={primary.main}
              activeDot={{ r: 8 }}
            />
            <Area
              type="monotone"
              dataKey="Buy"
              fill={secondary.main}
              stroke={secondary.main}
            />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </Grid>
      <Grid height="400px" xs={12} md={6}>
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sell" fill={primary.main} />
            <Bar dataKey="Buy" fill={secondary.main} />
          </BarChart>
        </ResponsiveContainer>
      </Grid>
      <Grid height="400px" xs={12} md={6}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="Sell"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill={primary.main}
            />
            <Pie
              data={data}
              dataKey="Buy"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill={secondary.main}
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Grid>
      <Grid height="400px" xs={12} md={6}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              stroke={primary.main}
              activeDot={{ r: 8 }}
              type="stepAfter"
              dataKey="Buy"
            />
            <Line type="monotone" stroke={secondary.main} dataKey="Sell" />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
};

export default DashboardChart;
