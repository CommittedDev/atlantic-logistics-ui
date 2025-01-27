import React from 'react'
import { LineChart } from '@mantine/charts';
import { Chip, Flex, Paper, Text } from '@mantine/core';

const data = [
    {
        value: '16.03',
        Supply: 30,
    },
    {
        value: '23.03',
        Supply: 15,
    },
    {
        value: '30.03',
        Supply: 10,
    },
];

const VolatilityMiniChart = () => {
    return (
        <Paper shadow="xs" radius="md" withBorder p="xl">
            <Flex>
                <Text c="dimmed">Volatility </Text> <Chip variant="light" checked color='green' >Stable</Chip>
            </Flex>
            <LineChart
                h={100}
                data={data}
                dataKey="value"
                series={[{ name: 'Supply', color: 'dark.6' }]}
                curveType="bump"
                tickLine="none"
                gridAxis="none"
                withYAxis={false}
                withDots={false}
            />
        </Paper>
    )
}

export default VolatilityMiniChart