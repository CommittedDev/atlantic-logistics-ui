'use client';

import React from 'react'
import { Icon } from '@iconify/react';
import { Card, Flex, Grid, Group, Paper, Text } from '@mantine/core'

interface TaskCategoryItemProps {
    title: string;
    count: number;
    stripeColor?: string;
}

const TaskCategoryItem: React.FC<TaskCategoryItemProps> = ({ title, count, stripeColor }) => {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder style={{ backgroundColor: '#F8F8F8', marginBottom: 20 }} >
            <Flex direction="column" >
                <Grid>
                    <Grid.Col span={1}>
                        <div style={{ backgroundColor: stripeColor, width: "5px", height: "45px", borderRadius: "5px" }} ></div>
                    </Grid.Col>
                    <Grid.Col span={11}>
                        <Text size="sm">{title}</Text>
                        <Text size="xl" fw={100}>{count}</Text>
                    </Grid.Col>
                </Grid>
            </Flex>

            <Paper shadow="sm" p="lg" radius="md">
                <Group justify='space-between'>
                    <Group justify="flex-start" >
                        <Icon icon="clarity:tag-outline-badged" width={20} height={20} />
                        <Text>Qoute Requests</Text>
                    </Group>
                    <Text>5</Text>
                </Group>

                <Group justify='space-between'>
                    <Group justify="flex-start" >
                        <Icon icon="ph:truck-light" width={20} height={20} />
                        <Text>Truck Off Schedule</Text>
                    </Group>
                    <Text>3</Text>
                </Group>

                <Group justify='space-between'>
                    <Group justify="flex-start" >
                        <Icon icon="mdi:latest" width={20} height={20} />
                        <Text>Late Deliveries</Text>
                    </Group>
                    <Text>2</Text>
                </Group>
            </Paper>
        </Card>
    )
}

export default TaskCategoryItem