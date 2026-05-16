import Group from "@mui/icons-material/Group";
import { Box, AppBar, Toolbar, Container, MenuItem, Typography, MenuList } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{
            background: 'linear-gradient(135deg, #182a73 0%, #21888e 69%)'
        }}>
        <Container maxWidth='xl'>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box>
                    <MenuList>
                        <MenuItem component={NavLink} to='/' sx={{display: 'flex', gap: 2}}>
                            <Group fontSize="large" />
                            <Typography variant="h4" sx={{fontWeight:'bold'}}>Reactivities</Typography>
                        </MenuItem>
                    </MenuList>
                </Box>
                <Box sx={{display: 'flex'}}>
                    <MenuList>
                        <MenuItemLink to='/activities'>Activities</MenuItemLink>
                    </MenuList>

                    <MenuList>
                        <MenuItemLink to='/createActivity'>Create Activity</MenuItemLink>
                    </MenuList>
                    <MenuList>
                        <MenuItem>
                            User Menu
                        </MenuItem>
                    </MenuList>
                </Box>
            </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
