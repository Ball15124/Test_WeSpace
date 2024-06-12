import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                backgroundColor: 'white',
                borderTop: '1px solid #e7e7e7',
                width: "100%"
            }}
        >
            <Typography variant='body2' color="textSecondary">
                1.1.2
            </Typography>
            <Typography variant="body2" color="textSecondary">
                © All Rights Reserved. EdVISORY Company Limited 2018.
            </Typography>
            <IconButton
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
            >
                <FacebookIcon />
            </IconButton>
        </Box>
    );
};

export default Footer;
