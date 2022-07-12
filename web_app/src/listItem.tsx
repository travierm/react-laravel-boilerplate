import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DataObjectIcon from '@mui/icons-material/DataObject';

import { ImDatabase } from 'react-icons/im';
import { RiNodeTree } from 'react-icons/ri';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <RiNodeTree />
      </ListItemIcon>
      <ListItemText primary="Nodes" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ImDatabase />
      </ListItemIcon>
      <ListItemText primary="Databases" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Recent Items
    </ListSubheader>
  </React.Fragment>
);
