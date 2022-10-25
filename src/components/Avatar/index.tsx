import React from 'react';
import { Avatar } from '@mui/material';

type AvatarVariant = 'BIG' | 'SMALL';

interface Props {
  alt?: string;
  icon?: string;
  variant?: AvatarVariant;
};

const WeatherAvatar = ({
  alt,
  icon,
  variant = 'BIG'
}: Props) => {
  const imageSource = `${process.env.REACT_APP_WEATHER_IMG_URL}${icon}@2x.png`;
  const avatarStyles = {
    'BIG': { height: '250px', width: '250px' },
    'SMALL': { height: '50px', width: '50px' }
  };
  return (
    <Avatar
      alt={alt}
      src={imageSource}
      sx={{ ...avatarStyles[variant], backgroundColor: 'grey' }}
    />
  )
};

export default WeatherAvatar;