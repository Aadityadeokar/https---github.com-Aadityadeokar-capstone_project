// CarCard.jsx
import React from 'react';
import { Card as MuiCard, CardContent, CardMedia, Typography, Button } from '@mui/material';

const CarCard = ({ imgSrc, title, description, link }) => {
    return (
        <Button
            sx={{
                maxWidth: 345,
                margin: 'auto',
                transition: 'transform 0.3s, box-shadow 0.3s',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                },
                textTransform: 'none', 
                display: 'block', 
                padding: 0, 
            }}
            href={link}
        >
            <MuiCard
                sx={{
                    maxWidth: 350,
                    minHeight: 350,
                    maxHeight:350,
                    margin: 'auto',
                    textAlign: 'left', 
                }}
            >
                <CardMedia
                    component="img"
                    height="350"
                    image={imgSrc}
                    alt={title}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </MuiCard>
        </Button>
    );
};

export default CarCard;
