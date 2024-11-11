import { CartesianGrid, BarChart, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from "recharts";

const Activity = ({ data }) => {
    // Vérifie si les données existent
    if (!data) {
        return null;
    }

    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  
    const formattedData = data.sessions.map((session, index) => ({
        ...session,
        day: days[index % 7] 
    }));

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={formattedData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" />
                <Bar dataKey="calories"fill="#E60000"  name="Calories brûlées (kCal)" /> 
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Activity;






