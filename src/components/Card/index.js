import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ProjectCard({img, title, text, link}) {
  return (
    <Card sx={{ width: 350, position: "relative" }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {img}
        title="project image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', justifyContent: 'left'}}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ height: 122 }}>
          {text}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', position: "absolute", bottom: 0}}>
        <Button className="repo" href={link} size="small" sx={{ fontSize: 11, fontWeight: 'bold' }}>Github Repo</Button>
      </CardActions>
    </Card>
  );
}
