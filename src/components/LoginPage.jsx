import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Switch, FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.jsx';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        console.log("Logging in with:", { email, password, rememberMe });
        if (!email.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }

        if (password.length === 0) {
            alert('Please enter a password');
            return;
        }
        navigate('/dashboard');
    };

    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex',flexDirection: 'column',position: 'fixed',top: 0,left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: '#1976d2'}}>
            <Footer />
            <div>
            <Typography variant="h4" gutterBottom color='white' fontWeight={'bolder'}> ¡Bienvenido!</Typography>
            </div>
            
            <Paper elevation={3} style={{ padding: 20, width: 300 }}>
                <Typography variant="h5" gutterBottom>Login</Typography>
                <TextField 
                    fullWidth 
                    label="Email" 
                    variant="outlined" 
                    margin="normal" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <TextField 
                    fullWidth 
                    label="Password" 
                    type="password" 
                    variant="outlined" 
                    margin="normal" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <FormControlLabel 
                    control={<Switch checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />} 
                    label="Remember Me" 
                />
                <Button 
                    fullWidth 
                    variant="contained" 
                    color="primary" 
                    onClick={handleLogin} 
                    style={{ marginTop: 10 }}
                >
                    Log In
                </Button>
            </Paper>
        </div>
    );
};

export default LoginPage;
