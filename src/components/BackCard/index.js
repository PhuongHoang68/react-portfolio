import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BackCard({title, text, link}) {
  return (
    <Card sx={{ width: 345, position: "relative" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', justifyContent: 'left'}}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{height: 120}}>
          {text}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', position: "absolute", bottom: 0}}>
        <Button href={link} size="small" sx={{ fontSize: 11, fontWeight: 'bold' }}>Github Repo</Button>
      </CardActions>
    </Card>
  );
}
