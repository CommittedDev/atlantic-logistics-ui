'use client';

import React, { useEffect, useState } from 'react';
import { Switch, useMantineTheme, rem, useMantineColorScheme } from '@mantine/core';
import { Icon } from '@iconify/react';

const ToggleDarkTheme = () => {
    const theme = useMantineTheme();
    const { colorScheme, setColorScheme } = useMantineColorScheme({ keepTransitions: true });
    const [clientColorScheme, setClientColorScheme] = useState<'light' | 'dark' | null>(null);

    useEffect(() => {
        if (colorScheme === 'light' || colorScheme === 'dark') setClientColorScheme(colorScheme);
    }, [colorScheme]);

    const toggleColorScheme = (value?: 'light' | 'dark') =>
        setColorScheme(value || (clientColorScheme === 'dark' ? 'light' : 'dark'));

    if (clientColorScheme === null) return null; // Wait for client-side rendering

    return (
        <Switch
            checked={clientColorScheme === 'dark'}
            onChange={() => toggleColorScheme()}
            size="lg"
            color="dark.4"
            onLabel={
                <Icon
                    icon="bi:moon-stars"
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.blue[6]}
                />
            }
            offLabel={
                <Icon
                    icon="bi:sun"
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.yellow[4]}
                />
            }
            aria-label="Toggle between light and dark themes"
        />
    );
};

export default ToggleDarkTheme;
