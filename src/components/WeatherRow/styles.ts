import { SxProps, Theme } from '@mui/material';

type Key = 'description';

export const styles: Record<Key, SxProps<Theme>> = {
  description: (theme: Theme) => ({
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }),
};