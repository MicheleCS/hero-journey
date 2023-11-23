import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface CardProps {
  name: string;
  description: string;
  image: string;
  powerstats?: {
    intelligence?: number;
    strength?: number;
    speed?: number;
    durability?: number;
    power?: number;
    combat?: number;
  };
}

const ActionAreaCard: React.FC<CardProps> = ({
  name,
  description,
  image,
  powerstats
}: CardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          {powerstats && (
            <div>
              <p>Powerstats:</p>
              <ul>
                {Object.entries(powerstats).map(([stat, value]: [string, any]) => (
                  <li key={stat}>
                    {stat}: {value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard;
