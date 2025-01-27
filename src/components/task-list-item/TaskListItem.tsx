'use client';

import React from 'react'
import { Button, Chip, Divider, Flex, Grid, Paper, Text, useModalsStack } from '@mantine/core'
import TaskListItemActions from '../task-list-item-actions/TaskListItemActions';

const TaskListItem = () => {

    const stack = useModalsStack(['see-details', 'rate-info']);

    return (
        <div style={{ position: 'relative', marginBottom: '10px' }}>

            <Paper shadow="xs" radius="md" withBorder p="xl" style={{ paddingTop: '50px' }}>
                <div style={{ marginBottom: 15 }}>
                    <Chip
                        checked
                        variant="light"
                        color='green'
                        icon={null}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            zIndex: 1,
                        }}
                    >
                        New
                    </Chip>
                </div>
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
                                <Grid.Col span={3}>
                                    <Text c="dimmed">Commodity</Text>
                                    <Text fw={500}>Toys</Text>
                                </Grid.Col>
                                <Grid.Col span={3}>
                                    <Text c="dimmed">Elapsed Time</Text>
                                    <Text fw={500}>1 Hour</Text>
                                    <Text c="dimmed">See Exact Time</Text>
                                </Grid.Col>
                            </Grid>
                        </Flex>
                    </Grid.Col>
                    <Divider size="sm" orientation="vertical" />

                    <Grid.Col span={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Button color="black" onClick={() => stack.open('see-details')} variant="filled">
                            See Details
                        </Button>
                    </Grid.Col>
                </Grid>
                <TaskListItemActions stack={stack} />
            </Paper>
        </div>
    )
}

export default TaskListItem;
