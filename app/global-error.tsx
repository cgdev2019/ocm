'use client';

import { Button, Stack, Typography } from '@mui/material';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Stack spacing={3} alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
          <Typography variant="h4">Une erreur est survenue</Typography>
          <Typography color="text.secondary">{error.message}</Typography>
          <Button variant="contained" onClick={reset}>
            Réessayer
          </Button>
        </Stack>
      </body>
    </html>
  );
}
