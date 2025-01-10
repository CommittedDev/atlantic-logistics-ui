'use client';

import React from 'react'
import { Button, Divider, Flex, Grid, Paper, Text, useModalsStack } from '@mantine/core'
import TaskListItemActions from '../task-list-item-actions/TaskListItemActions';

const TaskListItem = () => {

    const stack = useModalsStack(['see-details', 'rate-info']);

    return (
        <Paper shadow="xs" radius="md" withBorder p="xl" style={{ marginBottom: "10px" }}>
            <Grid>
                <Grid.Col span={9}>
                    <Flex direction="column">
                        <Grid>
                            <Grid.Col span={2}>
                                <Text c="dimmed">Customer</Text>
                                <Text fw={500}>ABC Supply</Text>
                                <Text c="dimmed">MBA#641</Text>
                            </Grid.Col>
                            <Grid.Col span={2}>
                                <Text c="dimmed">Origin</Text>
                                <Text fw={500}>Tampa FL</Text>
                                <Text c="dimmed">33169</Text>
                            </Grid.Col>
                            <Grid.Col span={2}>
                                <Text c="dimmed">Destination</Text>
                                <Text fw={500}>ABC Supply</Text>
                                <Text c="dimmed">#504</Text>
                            </Grid.Col>
                            <Grid.Col span={2}>
                                <Text c="dimmed">Container</Text>
                                <Text fw={500}>40{"''"}</Text>
                            </Grid.Col>
                            <Grid.Col span={3}>
                                <Text c="dimmed">Equipment Type</Text>
                                <Text fw={500}>Toys</Text>
                            </Grid.Col>
                        </Grid>
                    </Flex>
                </Grid.Col>
                <Divider size="sm" orientation="vertical" />
                <Grid.Col span={2}>
                    <Flex direction="column" justify="center" >
                        <Button color="black" variant="filled">Send To Rates</Button>
                        <Button onClick={() => stack.open('see-details')} variant="transparent" justify="flex-start" size='compact-xs' color='grey' style={{ marginTop: "10px", fontSize: 14 }} > See Details {'>>'} </Button>
                    </Flex>
                </Grid.Col>
            </Grid>
            <TaskListItemActions stack={stack} />
        </Paper>
    )
}

export default TaskListItem