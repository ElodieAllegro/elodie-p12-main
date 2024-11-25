import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from "recharts"
import "./averageSession.css"

const CustomTooltip = ({active, payload, label}) => {
    console.log(payload)
    if (active && payload && payload.length) {
        return <div className="custom-tooltip">
            {payload[0].value} min
        </div>
    }

    return null
}

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
        <XAxis 
            dataKey={({day}) => days[day]} 
            axisLine={false} 
            tickLine={false} 
            tick={{stroke: 'white', width: 0, fontWeight: 100, opacity: 0.5}}            
        />
        <Tooltip 
            content={<CustomTooltip/>}
            cursor={false}
        />
        <Legend />
        <Line 
            type="monotone" 
            dataKey="sessionLength" 
            stroke="#FFF" 
            strokeWidth={2} 
            dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
       
    )

    
}

export default AverageSession

