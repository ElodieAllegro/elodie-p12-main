import { CartesianGrid, BarChart, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from "recharts";

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{
                backgroundColor: "#E60000",
                color: "#FFFFFF",
                border: "none",
                padding: "10px",
                borderRadius: "5px",
            }}>
                <p style={{ margin: 0 }}>{`Kg: ${payload[0].value}`}</p>
                <p style={{ margin: 0 }}>{`Kcal: ${payload[1].value}`}</p>
            </div>
        );
    }

    return null;
};

const Activity = ({ data }) => {
    if (!data) {
        return null;
    }

    const formattedData = data.sessions.map((session, index) => ({
        ...session,
        idx: index + 1 
    }));

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={formattedData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="idx" />
                <YAxis hide />
                <YAxis orientation="right" yAxisId={1} />
                <Tooltip 
                    content={<CustomTooltip />}
                />
                <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" barSize={7} radius={[3, 3, 0, 0]} yAxisId={1} />
                <Bar dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" barSize={7} radius={[3, 3, 0, 0]} /> 
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Activity;






