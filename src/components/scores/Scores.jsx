import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';
const scores = ({data}) => {
  console.log(data)
    
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
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="100%"
            outerRadius="100%"
            barSize={10} 
            data={[{todayScore: data}]}
            startAngle={90} 
            endAngle={450}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 1]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              minAngle={90}
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise
              dataKey="todayScore"
              cornerRadius={30}
              fill='red'
              label={false}
            />            
            <text
        x="50%"
        y="45%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="progress-value"
        fontSize={26}
      >
        {data * 100}%
      </text>
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="progress-label"
        width={20}
        fill="grey"
      >
        de votre
      </text>
      <text
        x="50%"
        y="65%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="progress-label"
        width={20}
        fill="grey"
      >
        objectif
      </text>
      
          </RadialBarChart>
        </ResponsiveContainer>
      );
    }
export default scores