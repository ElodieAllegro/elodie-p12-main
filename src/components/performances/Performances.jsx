import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';


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
          <Radar name="" dataKey="value" stroke="#FFF" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }


Performances.propTypes =  {
  data: PropTypes.object.isRequired
}

export default Performances;







