import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Switch, FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!email.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }
        if (!password) {
            alert('Please enter a password');
            return;
        }
        console.log("Logging in with:", { email, password, rememberMe });
        navigate('/dashboard');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#1976d2' }}>
            <Typography variant="h4" color="white" fontWeight="bold" gutterBottom>¡Bienvenido!</Typography>
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
