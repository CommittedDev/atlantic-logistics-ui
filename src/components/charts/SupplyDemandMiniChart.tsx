import React from 'react'
import { LineChart } from '@mantine/charts';
import { Paper } from '@mantine/core';

const data = [
    {
        value: '16.03',
        Supply: 30,
        Demand: 28,
    },
    {
        value: '23.03',
        Supply: 15,
        Demand: 15,
    },
    {
        value: '30.03',
        Supply: 10,
        Demand: 9,
    },
];


const SupplyDemandMiniChart = () => {
    return (
        <Paper shadow="xs" radius="md" withBorder p="xl">
            <LineChart
                h={100}
                data={data}
                dataKey="value"
                withLegend
                series={[
                    { name: 'Supply', color: 'dark.6' },
                    { name: 'Demand', color: 'gray.5', strokeDasharray: '5 5' },
                ]}
                curveType="bump"
                tickLine="none"
                gridAxis="none"
                withYAxis={false}
                withDots={false}
            />
        </Paper>
    )
}

export default SupplyDemandMiniChart