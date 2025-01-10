import { Button, Divider, Flex, Grid, Group, Modal, Text } from '@mantine/core'
import React from 'react'

const TaskListItemActions = ({ stack }) => {
    return (
        <Modal.Stack>
            <Modal {...stack.register('see-details')} size="90%" centered  >
                <div style={{ margin: 30 }}>
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
                            </Flex>
                        </Grid.Col>
                    </Grid>
                </div>
            </Modal>

        </Modal.Stack>
    )
}

export default TaskListItemActions