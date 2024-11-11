import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from "recharts"
import "./averageSession.css"

const AverageSession = ({data}) => {

    const days = {
        1: 'L',
        2: 'M',
        3: 'M',
        4: 'J',
        5: 'V',
        6: 'S',
        7: 'D'
    }

    if(!data){
        return null
    }
    return (
     
        <ResponsiveContainer>
      <LineChart data={data.sessions}>
      <XAxis dataKey={({day}) => days[day]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sessionLength" stroke="#FFF" strokeWidth={2} />
      </LineChart>
        </ResponsiveContainer>
       
    )

    
}

export default AverageSession

