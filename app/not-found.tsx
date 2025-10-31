"use client";

import { Box, Button, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ minHeight: '80vh' }}>
      <Typography variant="h3">404</Typography>
      <Typography variant="body1" color="text.secondary">
        Page introuvable.
      </Typography>
      <Box>
        <Button variant="contained" onClick={() => router.replace('/')}>
          Retour à l’accueil
        </Button>
      </Box>
    </Stack>
  );
}
