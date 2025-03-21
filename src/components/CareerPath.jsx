"use client";

import React from 'react';
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography, 
  Box,
  Container
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const CareerPath = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const steps = [
    {
      id: 'panel1',
      number: '1',
      title: 'Dein Bewerbung für das Leadership-Programm',
      content: 'Der erste Schritt in deine Selbstständigkeit beginnt mit der Bewerbung über unser Formular. Hier teilst du uns deine Motivation mit und sendest deinen Lebenslauf ein. Dies ist die erste Gelegenheit, um uns von deiner Leidenschaft für Physiotherapie und deinen unternehmerischen Ambitionen zu überzeugen.'
    },
    {
      id: 'panel2',
      number: '2',
      title: 'Sichtung & Erstgespräch',
      content: 'Nachdem wir deine Bewerbung geprüft haben, laden wir dich zu einem persönlichen Gespräch ein. Hier lernen wir dich kennen, tauschen erste Informationen aus und klären deine Fragen. So schaffen wir eine Basis für eine mögliche Partnerschaft und den nächsten Karriereschritt.'
    },
    {
      id: 'panel3',
      number: '3',
      title: 'Start des Leadership-Programms',
      content: 'Jetzt beginnt dein Weg als zukünftiger Geschäftsführer! Im Leadership-Programm erhältst du wertvolle Einblicke in die Unternehmensführung durch Seminare, Workshops und den Austausch mit Experten. Du lernst unser erprobtes Konzept kennen und erhältst exklusive Behind-the-Scenes-Einblicke in erfolgreiche THERAPIUM-Standorte.'
    },
    {
      id: 'panel4',
      number: '4',
      title: 'Abschluss & Standortsuche',
      content: 'Nach dem erfolgreichen Abschluss des Leadership-Programms beginnt die gezielte Suche nach der passenden Praxis für dich. Dank unseres starken Netzwerks und kontinuierlicher Marktanalyse finden wir Standorte, die perfekt zu deinem individuellen Konzept und unserer THERAPIUM-Strategie passen.'
    },
    {
      id: 'panel5',
      number: '5',
      title: 'Grand Opening & Start deiner Selbstständigkeit',
      content: 'Der letzte Schritt: Die Eröffnung deiner eigenen THERAPIUM-Praxis! Mit einem optimalen Standort und unserem bewährten System startest du sicher und erfolgreich in die Selbstständigkeit. Dein Grand Opening markiert den Beginn einer vielversprechenden Karriere als Geschäftsführer – mit THERAPIUM an deiner Seite. '
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="subtitle1" sx={{ 
          color: '#A1A1A1', 
          mb: 1,
          fontFamily: 'var(--font-lato), sans-serif',
          fontSize: "24px",
          lineHeight: "35px"
        }}>
          Leadership Karrierepfad
        </Typography>
        <Typography  component="h2" sx={{ 
          fontSize:"60px",
          color: '#27557C', 
          fontWeight: 'medium', 
          mb: 4,
          fontFamily: 'var(--font-lato)'
        }}>
          Dein Weg zur <br /> eigenen Praxis
        </Typography>
      </Box>

      {steps.map((step) => (
        <Accordion 
          key={step.id}
          expanded={expanded === step.id} 
          onChange={handleChange(step.id)}
          sx={{
            mb: 2,
            boxShadow: 'none',
            '&::before': {
              display: 'none',
            },
            borderRadius: 0,
            fontFamily: 'var(--font-lato), sans-serif'
          }}
        >
          <AccordionSummary
            expandIcon={expanded === step.id ? 
              <CloseIcon sx={{ color: '#27557C' }} /> : 
              <AddIcon sx={{ color: '#27557C' }} />
            }
            aria-controls={`${step.id}-content`}
            id={`${step.id}-header`}
            sx={{
              
              padding: '16px 0',
              '&.Mui-expanded': {
                minHeight: 48,
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <Typography 
                variant="h2" 
                component="span" 
                sx={{ 
                  fontSize: '60px', 
                  fontWeight: 'bold', 
                  color: '#27557C',
                  mr: 4,
                  width: '60px',
                  fontFamily: 'var(--font-lato)'
                }}
              >
                {step.number}
              </Typography>
              <Typography variant="h6" component="span" sx={{ 
                color: '#27557C', 
                fontWeight: 'bold',
                fontSize: '34px', 
                lineHeight: '50px',
                fontFamily: 'var(--font-lato)'
              }}>
                {step.title}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ pl: 12, pr: 4, pb: 3, width:"69%" }}>
            <Typography sx={{ fontFamily: 'var(--font-lato), sans-serif', fontSize: "17px", lineHeight: "27px" }}>
              {step.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'start', 
        alignItems: 'center', 
        mt: 5,
        pt: 3
      }}>
        <Typography variant="body1" sx={{ 
          maxWidth: '70%',
          fontFamily: 'var(--font-lato), sans-serif',
          fontSize: "24px",
          lineHeight: "35px",

        }}>
          Wenn auch du diesen Weg beschreiten möchtest, schicke uns deine Bewerbung!
        </Typography>
        <Box sx={{ 
          bgcolor: '#ffd200', 
          borderRadius: '50%', 
          width: 140, 
          height: 140, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          p: 2,
          textAlign: 'center'
        }}>
          <Typography variant="body1" sx={{ 
            rotate: "-8.6deg",
            fontSize: "40px",
            color: "#27557C",
            fontWeight: 'bold',
            fontFamily: 'var(--font-crackers-brusher)'
          }}>
            ICH BIN BEREIT
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default CareerPath; 