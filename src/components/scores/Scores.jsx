import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
const scores = ({data}) => {

    
      if (!data) return "data not found";
 // Définir le style pour le Legend
 const style = {
  top: '50%',
  right: 0,
  transform: 'translateY(-50%)',
  lineHeight: '24px',
};
      return (
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise
              dataKey="todayScore"
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
          </RadialBarChart>
        </ResponsiveContainer>
      );
    }
export default scores