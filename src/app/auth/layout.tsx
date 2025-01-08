import { Center, Container } from '@mantine/core';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <Container size="100%" m={10} style={{  minHeight: '100vh' }}>
            <Center style={{ height: '100%' }}>
                {children}
            </Center>
        </Container>
    );
}

export default Layout;
