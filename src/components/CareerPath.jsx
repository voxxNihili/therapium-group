"use client";

import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Container, useMediaQuery, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const CareerPath = () => {
  const [expanded, setExpanded] = React.useState("panel0");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery("(max-width:1440px)");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const steps = [
    {
      id: "panel1",
      number: "1",
      title: "KICKOFF – Motivation, Mindset & Vision",
      content:
        "• Willkommen & Auftakt<br/>" +
        "• Persönliche Begrüßung & Intro durch dich als Gründer<br/>" +
        "• Warum gibt es diese Leadership-Reihe?<br/>" +
        "• Die Leadership-Reihe & dein Weg (Überblick über alle Module)<br/>" +
        "• Persönliche Entwicklung (Aushändigung der Exit-Karte)<br/>" +
        "• Vision, Mission & Werte von THERAPIUM<br/>" +
        "• Bezirkswunsch: „Wo sehe ich meine Praxis?“<br/>" +
        "• Vorstellung von THERAPIUM (Partner, Backoffice und externer Coach)<br/>" +
        "• Komfortzone, Motivation & Mindset",
    },
    {
      id: "panel2",
      number: "2",
      title: "Modul 1 – Der Weg zur Selbstständigkeit",
      content:
        "Die 10 Schritte zur eigenen Praxis:<br/>" +
        "• Warum / Wille / Motivation<br/>" +
        "• Mindset / Komfortzone<br/>" +
        "• Vision / Ziel<br/>" +
        "• Marktanalyse (Patienten- und Mitarbeiterprofil)<br/>" +
        "• Marke / Prozesse / Digitalisierung<br/>" +
        "• Zulassung & Verträge<br/>" +
        "• Businessplan & Finanzierung<br/>" +
        "• Bauphase<br/>" +
        "• Marketing<br/>" +
        "• Führungsqualität<br/>" +
        "• Chancen, Risiken & Entwicklungsmöglichkeiten",
    },
    {
      id: "panel3",
      number: "3",
      title: "Modul 2 – Unternehmensstruktur & Rollenverständnis",
      content:
        "• Überblick: Organigramm & Unternehmensstruktur<br/>" +
        "• Geschäftsführung, Praxisleiter, stellvertretende Leitung<br/>" +
        "• Executive Assistant<br/>" +
        "• HR, Backoffice, Marketing<br/>" +
        "• Meetingkultur & Entscheidungsebenen<br/>" +
        "• Tools & Systeme: Factorial, Just Social, Motion und Reteach<br/>" +
        "• Zusammenarbeit & Schnittstellen verstehen",
    },
    {
      id: "panel4",
      number: "4",
      title: "Modul 3 – Praxisabläufe & Standard Operating Procedure",
      content:
        "• Das Geschäftsführer-Playbook: Entscheidungen, Prioritäten & Standards<br/>" +
        "• Handbuch für Standortleiter<br/>" +
        "• Mitarbeiterhandbücher (Empfang und Physiotherapie)<br/>" +
        "• Dokumentenmanagement (Checklisten)<br/>" +
        "• Qualitätsmanagement & Prozesssicherheit",
    },
    {
      id: "panel5",
      number: "5",
      title: "Modul 4 – Kommunikation & Netzwerkpflege",
      content:
        "• Kommunikationskultur bei THERAPIUM<br/>" +
        "• Kommunikationsmodelle (z. B. gewaltfreie Kommunikation & aktives Zuhören)<br/>" +
        "• Führungskommunikation & Konfliktgespräche<br/>" +
        "• Professioneller Umgang mit Patienten<br/>" +
        "Netzwerkaufbau:<br/>" +
        "• Kooperation mit Ärzten, Therapeuten & Kliniken<br/>" +
        "• Repräsentation der Praxis nach außen",
    },
    {
      id: "panel6",
      number: "6",
      title: "Modul 5 – Personalführung & Teamentwicklung",
      content:
        "• Leadership-Philosophie & Vorbildrolle<br/>" +
        "• Führung durch Haltung & Selbstführung<br/>" +
        "• Authentizität, Integrität & Wirkung<br/>" +
        "• Führungsstile und situatives Führen<br/>" +
        "• Teamentwicklung & Rollenverantwortung<br/>" +
        "• Teamphasen, Gruppendynamik & Rollenverteilung<br/>" +
        "• Feedback & Entwicklungsgespräche<br/>" +
        "• Konfliktmanagement im Führungsalltag<br/>" +
        "• Wirtschaftspsychologie & Change Management<br/>" +
        "• Motivationstheorien<br/>" +
        "• Umgang mit Widerstand & Veränderung<br/>" +
        "• Kulturarbeit & Mitarbeiterbindung<br/>" +
        "• Identifikation, Rituale & gelebte Werte",
    },
    {
      id: "panel7",
      number: "7",
      title: "Modul 6 – Finanzen, Verwaltung & Verantwortung",
      content:
        "• Betriebswirtschaftliche Grundlagen<br/>" +
        "• Kostenstruktur, Deckungsbeiträge, Liquiditätsplanung<br/>" +
        "• Behandlungsmix & Wirtschaftlichkeit<br/>" +
        "KPI-Verantwortung & Controlling:<br/>" +
        "• Umsatz, Auslastung, Fallzahlen & Benchmarks<br/>" +
        "• Monats-/Quartalsberichte interpretieren & handeln<br/>" +
        "Verwaltung & Organisation:<br/>" +
        "• ETL, Steuerberater, Lohn & Verträge<br/>" +
        "• Personalplanung, Urlaube & Fehlzeiten<br/>" +
        "Rechtliche Grundlagen & Pflichten: <br/>" +
        "• GmbH-Recht, Datenschutz & Arbeitsschutz<br/>" +
        "• Geschäftsführer-Haftung & Pflichten<br/>" +
        "Ownership-Mindset: <br/>" +
        "• Verantwortung übernehmen & unternehmerisch denken",
    },
    {
      id: "panel8",
      number: "8",
      title: "Modul 7 – Partnerschaft bei THERAPIUM",
      content:
        "• Was bedeutet Unternehmertum bei THERAPIUM?<br/>" +
        "• Chancen erkennen & Risiken bewerten<br/>" +
        "• Standortentwicklung & langfristige Vision<br/>" +
        "Voraussetzungen für eine Partnerschaft: <br/>" +
        "• Erwartungen, Beteiligung & Mitgestaltung<br/>" +
        "• Persönliche & fachliche Reife<br/>" +
        "• Mein Commitment zur unternehmerischen Rolle",
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
          <AccordionDetails
            sx={{
              pl: isMobile ? 5 : isMedium ? 8 : 12,
              pr: 4,
              pb: 3,
              width: isMobile ? "100%" : isMedium ? "80%" : "69%",
            }}
          >
            <Typography
              component="div"
              sx={{
                fontFamily: "var(--font-lato), sans-serif",
                fontSize: isMobile ? "15px" : isMedium ? "16px" : "17px",
                lineHeight: isMobile ? "22px" : isMedium ? "24px" : "27px",
              }}
              dangerouslySetInnerHTML={{ __html: step.content }}
            >
           
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
        className={isMobile ? "w-full" : "md:w-[60%] w-full"}
      >
        <Typography
          variant="body1"
          sx={{
            maxWidth: isMobile ? "100%" : "70%",
            fontFamily: "var(--font-lato), sans-serif",
            fontSize: isMobile ? "18px" : isMedium ? "20px" : "24px",
            lineHeight: isMobile ? "26px" : isMedium ? "30px" : "35px",
            mb: isMobile ? 3 : 0,
            color: "#191919",
          }}
        >
          Wenn auch du diesen Weg beschreiten möchtest, schicke uns deine Bewerbung!
        </Typography>
        <Box
          sx={{
            bgcolor: "#ffd200",
            borderRadius: "50%",
            width: isMobile ? 105 : isMedium ? 130 : 140,
            height: isMobile ? 105 : isMedium ? 130 : 140,
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
              rotate: "-8.15deg",
              fontSize: isMobile ? "27px" : isMedium ? "36px" : "40px",
              color: "#27557C",
              fontWeight: "normal",
              fontFamily: "var(--font-crackers-brusher)",
              lineHeight: 1.1,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              whiteSpace: "pre-line",
              textOverflow: "ellipsis",
              userSelect: "none",
            }}
          >
            {"ICH BIN\nBEREIT"}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default CareerPath;
