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

import { FiChevronLeft, FiChevronRight, FiInbox, FiMenu } from 'react-icons/fi';
import {
  AttachMoney,
  BusinessCenter,
  Dashboard,
  Event,
  LocalAtm,
  PermIdentity,
  Search,
  TrendingUp,
} from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';

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
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAddIcon = useCallback((iconName: string) => {
    switch (iconName) {
      case 'Procurar':
        return <Search />;
      case 'Perfil':
        return <PermIdentity />;
      case 'Oportunidades':
        return <BusinessCenter />;
      case 'Calendário':
        return <Event />;
      case 'Vendas':
        return <TrendingUp />;
      case 'Limites':
        return <AttachMoney />;
      case 'Títulos':
        return <LocalAtm />;

      default:
        return <FiInbox />;
    }
  }, []);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);

    switch (index) {
      case 1:
        return history.push('/profile');
      case 2:
        return history.push('/opportunities');

      default:
        break;
    }
  };

  const handleChangePageSelected = useCallback((index: number) => {
    console.log(index);
    switch (index) {
      case 1:
        return console.log('teste');
      default:
        break;
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
              Dashboard
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
            'Procurar',
            'Perfil',
            'Oportunidades',
            'Calendário',
            'Vendas',
            'Limites',
            'Títulos',
          ].map((text, index) => (
            <ListItem
              button
              key={text}
              selected={selectedIndex === index}
              onClick={(e) => handleListItemClick(e, index)}
              onChange={() => handleChangePageSelected(index)}
            >
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
