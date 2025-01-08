'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { AppShell, Burger, Group, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { usePathname } from 'next/navigation';
import AuthProvider from '@/auth/AuthProvider';

const Layout = ({ children }: { children: ReactNode }) => {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [collapsed, { toggle: toggleCollapsed }] = useDisclosure(false); // Manage collapsed state
    const pathname = usePathname();

    // Define the navigation items
    const navItems = [
        { label: 'Notifications', route: '/dashboard/notifications', icon: 'fontisto:bell' },
        { label: 'New Task', route: '/dashboard/new-task', icon: 'material-symbols:add-circle-rounded' },
        { label: 'Your Tasks', route: '/dashboard/your-tasks', icon: 'solar:user-circle-linear' },
        { label: 'Work', route: '/dashboard/work', icon: 'fluent-mdl2:work' },
        { label: 'Settings', route: '/dashboard/settings', icon: 'mynaui:stop-hexagon' },
    ];

    return (
        <AuthProvider>
            <AppShell
                header={{ height: 60 }}
                navbar={{
                    width: collapsed ? 90 : 300, //Adjust width based on collapsed state
                    breakpoint: 'sm',
                    collapsed: { mobile: !mobileOpened },
                }}
                padding="md"
            >
                <AppShell.Header>
                    <Group h="100%" px="md">
                        <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                        <Burger
                            opened={!collapsed}
                            onClick={toggleCollapsed}
                            visibleFrom="sm"
                            size="sm"
                        // style={{ marginLeft: 'auto' }}
                        />
                    </Group>
                </AppShell.Header>
                <AppShell.Navbar
                    p="md"
                    style={{
                        overflow: 'hidden', //Prevent content overflow when collapsed
                        transition: 'width 0.3s', //Smooth transition for collapsing/expanding
                    }}
                >
                    {navItems.map((item) => (
                        <NavLink
                            key={item.route}
                            label={collapsed ? undefined : item.label} // Hide label when collapsed
                            component={Link}
                            href={item.route}
                            active={pathname === item.route}
                            leftSection={<Icon icon={item.icon ?? ''} width={20} height={20} />}
                            style={{
                                justifyContent: 'flex-start', // Keep alignment consistent
                                paddingLeft: collapsed ? '1rem' : '1.5rem', // Adjust padding for icons
                            }}
                        />
                    ))}
                </AppShell.Navbar>
                <AppShell.Main>{children}</AppShell.Main>
            </AppShell>
        </AuthProvider>
    );
};

export default Layout;
