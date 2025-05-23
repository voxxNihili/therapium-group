"use client";
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const ExitReflectionSection = () => {
  return (
    <>
      <style jsx global>{`
        @media (max-width: 500px) {
          .reflection-content-mobile {
            margin-left: 1rem !important;
            margin-right: 1rem !important;
            max-width: none !important;
          }
        }
      `}</style>
      
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: 'url(/images/myexitbanner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          '--content-margin-left': '17%',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#FFFFFFEB',
            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            position: 'relative',
            zIndex: 2,
            py: 8,
            width: '100%',
            px: 0,
          }}
        >
          <Box
            className="reflection-content-mobile"
            sx={{
              ml: 'var(--content-margin-left)',
              mr: 'auto',
              maxWidth: '705px',
            }}
          >
            {/* Title */}
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                fontSize: '35px',
                lineHeight: '28px',
                letterSpacing: '0px',
                mb: 4,
                color: '#27557C',
              }}
            >
              Was bleibt, wenn du aussteigst?
            </Typography>

            {/* Article Content */}
            <Typography
              variant="body1"
              component="div"
              sx={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '28px',
                letterSpacing: '0px',
                color: '#27557C',
                '& p': {
                  mb: 3,
                },
                '& ul': {
                  pl: 0,
                  listStyle: 'none',
                  '& li': {
                    mb: 1,
                    '&::before': {
                      content: '"•"',
                      mr: 2,
                      fontWeight: 'bold',
                    },
                  },
                },
              }}
            >
              <p>
                Vergiss dabei nie den Ausgangspunkt: Deine Zufriedenheit bei THERAPIUM als 
                Mitarbeiter und THERAPIUM als guter Arbeitgeber. Selbst im 'Worst Case' ist es 
                eine starke Entscheidung, genau dort weiterzumachen – mit dem wertvollen Plus 
                an Erfahrung, das dir niemand mehr nehmen kann. Die bewusste Erkenntnis, dass 
                dieser Weg (noch) nicht der richtige für dich ist, ist eine echte Leistung.
              </p>
              
              <p>
                Diese Trennung ist wichtig: Du bist nicht weniger wert, nur weil du (noch) nicht 
                führst. Und du bist uns genauso viel wert, wenn du als Mitarbeiter bleibst.
              </p>
              
              <ul>
                <li>Kein Scheitern.</li>
                <li>Kein Gesichtsverlust.</li>
                <li>
                  Sondern: Die Rückkehr zum Ausgangspunkt – zu dem, was du schon bist: 
                  Ein starker, engagierter Mitarbeiter, auf den wir bauen.
                </li>
              </ul>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ExitReflectionSection;
