"use client";

import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Container, useMediaQuery, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const CareerPath = () => {
  const [expanded, setExpanded] = React.useState("panel1");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery('(max-width:1440px)');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const steps = [
    {
      id: "panel1",
      number: "1",
      title: "Dein Bewerbung für das Leadership-Programm",
      content:
        "Der erste Schritt in deine Selbstständigkeit beginnt mit der Bewerbung über unser Formular. Hier teilst du uns deine Motivation mit und sendest deinen Lebenslauf ein. Dies ist die erste Gelegenheit, um uns von deiner Leidenschaft für Physiotherapie und deinen unternehmerischen Ambitionen zu überzeugen.",
    },
    {
      id: "panel2",
      number: "2",
      title: "Sichtung & Erstgespräch",
      content:
        "Nachdem wir deine Bewerbung geprüft haben, laden wir dich zu einem persönlichen Gespräch ein. Hier lernen wir dich kennen, tauschen erste Informationen aus und klären deine Fragen. So schaffen wir eine Basis für eine mögliche Partnerschaft und den nächsten Karriereschritt.",
    },
    {
      id: "panel3",
      number: "3",
      title: "Start des Leadership-Programms",
      content:
        "Jetzt beginnt dein Weg als zukünftiger Geschäftsführer! Im Leadership-Programm erhältst du wertvolle Einblicke in die Unternehmensführung durch Seminare, Workshops und den Austausch mit Experten. Du lernst unser erprobtes Konzept kennen und erhältst exklusive Behind-the-Scenes-Einblicke in erfolgreiche THERAPIUM-Standorte.",
    },
    {
      id: "panel4",
      number: "4",
      title: "Abschluss & Standortsuche",
      content:
        "Nach dem erfolgreichen Abschluss des Leadership-Programms beginnt die gezielte Suche nach der passenden Praxis für dich. Dank unseres starken Netzwerks und kontinuierlicher Marktanalyse finden wir Standorte, die perfekt zu deinem individuellen Konzept und unserer THERAPIUM-Strategie passen.",
    },
    {
      id: "panel5",
      number: "5",
      title: "Grand Opening & Start deiner Selbstständigkeit",
      content:
        "Der letzte Schritt: Die Eröffnung deiner eigenen THERAPIUM-Praxis! Mit einem optimalen Standort und unserem bewährten System startest du sicher und erfolgreich in die Selbstständigkeit. Dein Grand Opening markiert den Beginn einer vielversprechenden Karriere als Geschäftsführer – mit THERAPIUM an deiner Seite. ",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 5 }}>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#A1A1A1",
            mb: 1,
            fontFamily: "var(--font-lato), sans-serif",
            fontSize: isMobile ? "18px" : isMedium ? "20px" : "24px",
            lineHeight: isMobile ? "26px" : isMedium ? "30px" : "35px",
          }}
        >
          Leadership Karrierepfad
        </Typography>
        <Typography
          component="h2"
          sx={{
            fontSize: isMobile ? "32px" : isMedium ? "45px" : "60px",
            color: "#27557C",
            fontWeight: "medium",
            mb: 4,
            fontFamily: "var(--font-lato)",
            lineHeight: isMobile ? "1.2" : "normal",
          }}
        >
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
            boxShadow: "none",
            "&::before": {
              display: "none",
            },
            borderRadius: 0,
            fontFamily: "var(--font-lato), sans-serif",
          }}
        >
          <AccordionSummary
            expandIcon={expanded === step.id ? <CloseIcon sx={{ color: "#27557C" }} /> : <AddIcon sx={{ color: "#27557C" }} />}
            aria-controls={`${step.id}-content`}
            id={`${step.id}-header`}
            sx={{
              padding: "16px 0",
              "&.Mui-expanded": {
                minHeight: 48,
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
              <Typography
                variant="h2"
                component="span"
                sx={{
                  fontSize: isMobile ? "36px" : isMedium ? "48px" : "60px",
                  fontWeight: "bold",
                  color: "#27557C",
                  mr: isMobile ? 2 : 4,
                  width: isMobile ? "30px" : isMedium ? "45px" : "60px",
                  fontFamily: "var(--font-lato)",
                }}
              >
                {step.number}
              </Typography>
              <Typography
                variant="h6"
                component="span"
                sx={{
                  color: "#27557C",
                  fontWeight: "bold",
                  fontSize: isMobile ? "18px" : isMedium ? "26px" : "34px",
                  lineHeight: isMobile ? "24px" : isMedium ? "36px" : "50px",
                  fontFamily: "var(--font-lato)",
                }}
              >
                {step.title}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ 
            pl: isMobile ? 5 : isMedium ? 8 : 12, 
            pr: 4, 
            pb: 3, 
            width: isMobile ? "100%" : isMedium ? "80%" : "69%" 
          }}>
            <Typography sx={{ 
              fontFamily: "var(--font-lato), sans-serif", 
              fontSize: isMobile ? "15px" : isMedium ? "16px" : "17px", 
              lineHeight: isMobile ? "22px" : isMedium ? "24px" : "27px" 
            }}>
              {step.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "start",
          alignItems: isMobile ? "flex-start" : "center",
          mt: 5,
          pt: 3,
        }}
        className={isMobile ? "w-full" : "w-[60%]"}
      >
        <Typography
          variant="body1"
          sx={{
            maxWidth: isMobile ? "100%" : "70%",
            fontFamily: "var(--font-lato), sans-serif",
            fontSize: isMobile ? "18px" : isMedium ? "20px" : "24px",
            lineHeight: isMobile ? "26px" : isMedium ? "30px" : "35px",
            mb: isMobile ? 3 : 0,
            color: "#191919"
          }}
        >
          Wenn auch du diesen Weg beschreiten möchtest, schicke uns deine Bewerbung!
        </Typography>
        <Box
          sx={{
            bgcolor: "#ffd200",
            borderRadius: "50%",
            width: isMobile ? 105 : isMedium ? 120 : 140,
            height: isMobile ? 105 : isMedium ? 120 : 140,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
            textAlign: "center",
            alignSelf: isMobile ? "center" : "auto",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              rotate: "-8.6deg",
              fontSize: { 
                xs: "24px", 
                sm: "28px", 
                md: "32px", 
                lg: "40px" 
              },
              color: "#27557C",
              fontWeight: "normal",
              fontFamily: "var(--font-crackers-brusher)",
              lineHeight: isMobile ? "1.1" : "normal",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            ICH BIN BEREIT
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default CareerPath;
