/* eslint-disable react/state-in-constructor */
import { Button } from '@mui/material';
import { useQueryClient, QueryCache } from '@tanstack/react-query';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  onReset?: () => void;
}

interface State {
  error: Error | null;
}

interface ProviderProps {
  children: (cache: QueryCache) => JSX.Element;
}

function QueryCacheProvider(props: ProviderProps) {
  return props.children(useQueryClient().getQueryCache());
}

export default class ErrorBoundary extends React.Component<Props, State> {
  public state: State = { error: null };

  public componentDidCatch(error: Error) {
    this.setState({ error });
  }

  public render() {
    const { error } = this.state;
    const { children } = this.props;
    if (error) {
      return (
        <QueryCacheProvider>
          {(cache: QueryCache) => (
            <>
              <pre>{error.message}</pre>
              <Button
                onClick={() => {
                  cache.clear();
                  const { onReset } = this.props;
                  this.setState({ error: null });
                  onReset?.();
                }}
              >
                RESET
              </Button>
            </>
          )}
        </QueryCacheProvider>
      );
    }
    return children;
  }
}
