import React, { useCallback } from 'react';
import clsx from 'clsx';

import {
  AppBar,
  createStyles,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  useTheme,
  Toolbar,
  Typography,
} from '@material-ui/core';

import {
  FiChevronLeft,
  FiChevronRight,
  FiInbox,
  FiMail,
  FiMenu,
} from 'react-icons/fi';
import {
  AttachMoney,
  Business,
  BusinessCenter,
  Dashboard,
  Event,
  LocalAtm,
  MonetizationOn,
  PermIdentity,
  TrendingUp,
} from '@material-ui/icons';

const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 10,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 3),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
  }),
);

const DrawerMenu: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAddIcon = useCallback((iconName: string) => {
    switch (iconName) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Perfil':
        return <PermIdentity />;
      case 'Calendário':
        return <Event />;
      case 'Vendas':
        return <TrendingUp />;
      case 'Oportunidades':
        return <BusinessCenter />;
      case 'Limites':
        return <AttachMoney />;
      case 'Títulos':
        return <LocalAtm />;

      default:
        return <FiInbox />;
    }
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar disableGutters style={{ paddingLeft: 15 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <FiMenu />

            <Typography variant="h6" noWrap style={{ paddingLeft: 45 }}>
              Relatório do cliente
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <FiChevronRight /> : <FiChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            'Dashboard',
            'Perfil',
            'Calendário',
            'Vendas',
            'Oportunidades',
            'Limites',
            'Títulos',
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{handleAddIcon(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
