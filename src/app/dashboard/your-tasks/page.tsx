'use client';

import React, { useEffect } from 'react'
import { Icon } from '@iconify/react';
import TaskCategoryItem from '@/components/task-category-item/TaskCategoryItem'
import { Flex, Input, ScrollArea } from '@mantine/core'
import TaskListItem from '@/components/task-list-item/TaskListItem';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { getTasks } from '@/redux/reducers/tasks/task-slice';

const Page = () => {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])

    return (
        <div>
            <Flex
                direction={{ base: 'column', sm: 'row' }}
                gap={{ base: 'sm', sm: 'lg' }}
                justify={{ sm: 'flex-start' }}
            >
                <div style={{ width: '20%' }}>
                    <h2>Your Tasks</h2>
                    <ScrollArea style={{ height: '78vh' }} offsetScrollbars>
                        <TaskCategoryItem title="Critical" stripeColor='#FF7676' count={5} />
                        <TaskCategoryItem title="High" stripeColor='#FFC862' count={8} />
                        <TaskCategoryItem title="Medium" stripeColor='#B8D82A' count={10} />
                    </ScrollArea>
                </div>
                <div style={{ width: '80%' }}>
                    <div style={{ marginBottom: 45 }}>
                        <Input placeholder="Search" variant="filled"
                            leftSection={<Icon icon="material-symbols:search" width={20} height={20} />}
                            rightSection={<Icon icon="mage:filter" width={20} height={20} />}
                        />

                    </div>
                    <div>
                        <ScrollArea style={{ height: '78vh' }} offsetScrollbars>
                            <TaskListItem />
                            <TaskListItem />
                            <TaskListItem />
                            <TaskListItem />
                            <TaskListItem />
                            <TaskListItem />
                            <TaskListItem />
                            <TaskListItem />
                            <TaskListItem />
                            <TaskListItem />
                            <TaskListItem />
                            <TaskListItem />
                        </ScrollArea>
                    </div>
                </div>
            </Flex>
        </div>
    )
}

export default Page