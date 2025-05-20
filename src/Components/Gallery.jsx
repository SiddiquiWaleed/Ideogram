import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Gallery.scss';

const Gallery = ({ items }) => (
  <div className="gallery-root">
    <Grid container spacing={3}>
      {items.map((item, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Card className="gallery-card">
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2">{item.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
);

export default Gallery; 