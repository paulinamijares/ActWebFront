import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

const pages = [
  { name: 'Inicio', path: '/dashboard' },
  { name: 'Contacto', path: '/contacto' },
  { name: 'Log out', path: '/login', Icon: <LogoutIcon />  } 
];

function ResponsiveAppBar() {
  const navigate = useNavigate();

  return (
    <AppBar sx={{ width: '100%' }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{ width: '100%' }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Act2Web
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex',justifyContent: 'flex-end'}}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => navigate(page.path)} 
                endIcon={page.Icon}
                sx={{
                    my: 2,
                    color: 'white',
                    display: 'flex', 
                    alignItems: 'center', 
                  }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
