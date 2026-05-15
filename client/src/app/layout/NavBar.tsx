import Group from "@mui/icons-material/Group";
import { Box, AppBar, Toolbar, Container, MenuItem, Button, Typography, MenuList } from "@mui/material";

type Props = {
    openForm: () => void;
}

export default function NavBar({openForm}: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{
            background: 'linear-gradient(135deg, #182a73 0%, #21888e 69%)'
        }}>
        <Container maxWidth='xl'>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box>
                    <MenuList>
                        <MenuItem sx={{display: 'flex', gap: 2}}>
                            <Group fontSize="large" />
                            <Typography variant="h4" sx={{fontWeight:'bold'}}>Reactivities</Typography>
                        </MenuItem>
                    </MenuList>
                </Box>
                <Box sx={{display: 'flex'}}>
                    <MenuList>
                        <MenuItem sx={{
                            fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'
                        }}>Activities
                        </MenuItem>
                    </MenuList>

                    <MenuList>
                        <MenuItem sx={{
                            fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'
                        }}>About
                        </MenuItem>
                    </MenuList>

                    <MenuList>
                        <MenuItem sx={{
                            fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'
                        }}>Contact
                        </MenuItem>
                    </MenuList>
                </Box>
                <Button
                    size="large"
                    variant="contained"
                    color="warning"
                    onClick={openForm}
                >
                    Create Activity
                    </Button>
            </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
