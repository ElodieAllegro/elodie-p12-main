import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
const Performances = ({data}) => {

const kinds = {
    1: 'cardio',
    2: 'Energie',
    3: 'Endurance',
    4: 'Force',
    5: 'Rapidité',
    6: 'Intensité',
   
};

  if (!data) return "data not found";
  const reversedKinds = Object.values(kinds).reverse();
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.data}>
          <PolarGrid />
          <PolarAngleAxis
          dataKey={({ kind }) => reversedKinds[kind - 1]}
        />
          <Radar name="" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
export default Performances;







