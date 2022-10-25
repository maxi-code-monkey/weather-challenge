import { SxProps, Theme } from '@mui/material';

type Key = 'mainContainer';

export const styles: Record<Key, SxProps<Theme>> = {
  mainContainer: (theme: Theme) => ({
    paddingBlockStart: '30px',
    [theme.breakpoints.up('sm')]: {
      paddingBlockStart: '80px',
    },
  }),
};