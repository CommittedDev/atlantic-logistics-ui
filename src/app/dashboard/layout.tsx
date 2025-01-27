'use client';

import React from 'react';
import {styled, useTheme, Theme, CSSObject} from '@mui/material/styles';
import {useRouter, usePathname} from 'next/navigation';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HexagonIcon from '@mui/icons-material/Hexagon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AuthProvider from '@/auth/AuthProvider';
import {LinearProgress, Menu, MenuItem} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {selectLoading} from '@/redux/selectors/common-selector';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {AppDispatch} from '@/redux/store';
import {SignOut} from '@/redux/reducers/auth-slice';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({theme, open}) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function Layout({children}: {children: React.ReactNode}) {
  const isLoading = useSelector(selectLoading);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const navItems = [
    {text: 'Your Tasks', icon: <AddCircleIcon />, path: '/dashboard/your-tasks'},
    {text: 'Account', icon: <AccountCircleIcon />, path: '/dashboard/account'},
    {text: 'Work', icon: <BusinessCenterIcon />, path: '/dashboard/work'},
  ];

  return (
    <AuthProvider>
      <Box sx={{display: 'flex'}}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={[{marginRight: 5}, open && {display: 'none'}]}>
              <MenuIcon />
            </IconButton>
            <LogoDevIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                display: {xs: 'none', md: 'flex'},
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}>
              ATLANTIC LOGISTICS
            </Typography>

            <Box sx={{flexGrow: 1}} />
            <div>
              <IconButton size="large" aria-label="account of current user" onClick={handleMenu} color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={() => dispatch(SignOut(router))}>Sign Out</MenuItem>
              </Menu>
            </div>
          </Toolbar>
          {isLoading && <LinearProgress sx={{position: 'absolute', bottom: 0, width: '100%'}} />}
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
          </DrawerHeader>
          <Divider />

          {/* Top navigation item */}
          <ListItem disablePadding onClick={() => router.push('/dashboard/notifications')}>
            <ListItemButton selected={pathname === '/dashboard/notifications'}>
              <ListItemIcon>
                <NotificationsActiveIcon />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItemButton>
          </ListItem>

          <Divider />

          {/* Centered navigation items */}
          <Box sx={{flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            {navItems.map(item => (
              <ListItem key={item.text} disablePadding onClick={() => router.push(item.path)}>
                <ListItemButton selected={pathname === item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </Box>

          <Divider />

          {/* Bottom navigation item */}
          <ListItem disablePadding onClick={() => router.push('/dashboard/settings')}>
            <ListItemButton selected={pathname === '/dashboard/settings'}>
              <ListItemIcon>
                <HexagonIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </Drawer>
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <DrawerHeader />
          {children}
        </Box>
      </Box>
    </AuthProvider>
  );
}
