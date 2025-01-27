import React from 'react'
import { Grid, Modal, Select, Text } from '@mantine/core'
import SupplyDemandMiniChart from '../charts/SupplyDemandMiniChart'
import VolatilityMiniChart from '../charts/VolatilityMiniChart'

const TaskListItemActions = ({ stack }) => {
    return (
        <Modal.Stack  >
            <Modal {...stack.register('see-details')} size="90%" centered withCloseButton={false}   >
                <Grid >
                    <Grid.Col span={4} style={{ backgroundColor: '#F9F9F9', margin: -8, padding: 30, }}  >
                        <div>
                            <Text fw={500}>Order Extracted Info</Text>
                            <Text c="dimmed">See Source {'>>'}</Text>
                        </div>

                        <div style={{ marginTop: 50 }}>
                            <Select
                                label="Customer"
                                data={['ABC Supply']}
                                value="ABC Supply"
                            />
                        </div>

                        <div style={{ marginTop: 20 }}>
                            <Select
                                label="Origin"
                                data={['Tampa, FL']}
                                value="Tampa, FL"
                            />
                        </div>

                        <div style={{ marginTop: 20 }}>
                            <Select
                                label="Destination"
                                data={['Pornt Name, New York, ports']}
                                value="Pornt Name, New York, ports"
                            />
                        </div>

                        <div style={{ marginTop: 20, marginBottom: 60 }}>
                            <Select
                                label="Commodity"
                                data={['Toys']}
                                value="Toys"
                            />
                        </div>


                        <Grid>
                            <Grid.Col span={6}>
                                <Text fw={400} size='14px' >Total Time</Text>
                                <Text fw={500} size='20px' >01:35:27</Text>
                            </Grid.Col>

                            <Grid.Col span={6}  >
                                <Text fw={400} size='14px'>Time in Request</Text>
                                <Text fw={500} size='20px' >01:35:27</Text>
                            </Grid.Col>
                        </Grid>


                    </Grid.Col>
                    <Grid.Col span={8} style={{ margin: -8, padding: 30, }} >
                        <Grid>

                            <Grid.Col span={4} >
                                <SupplyDemandMiniChart />
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <VolatilityMiniChart />
                            </Grid.Col>

                        </Grid>
                    </Grid.Col>
                </Grid>
            </Modal>

        </Modal.Stack>
    )
}

export default TaskListItemActions