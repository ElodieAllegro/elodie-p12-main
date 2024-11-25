import { CartesianGrid, BarChart, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types';

const Activity = ({ data }) => {
    // Vérifie si les données existent
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
                <XAxis dataKey="idx"/>
                <YAxis hide/>
                <YAxis orientation="right" yAxisId={1}/>
                <Tooltip />
               
                <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" barSize={7} radius={[3, 3, 0, 0]} yAxisId={1}/>
                <Bar dataKey="calories"fill="#E60000"  name="Calories brûlées (kCal)" barSize={7} radius={[3, 3, 0, 0]}/> 
            </BarChart>
        </ResponsiveContainer>
    );
};

Activity.propTypes =  {
    data: PropTypes.object.isRequired
  }

export default Activity;






