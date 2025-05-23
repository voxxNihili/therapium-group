"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

const LeadershipClaritySection = () => {
  return (
    <>
      <style jsx global>{`
        @media (max-width: 500px) {
          .leadership-content-container {
            margin-left: 1rem !important;
            margin-right: 1rem !important;
            max-width: none !important;
          }
        }
        @media (max-width: 1023px) {
          .leadership-layout {
            flex-direction: column !important;
          }
          .leadership-image-container {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            margin-top: 2rem !important;
          }
          .leadership-image-wrapper {
            width: 350px !important;
            height: 350px !important;
          }
        }
        @media (min-width: 1024px) and (max-width: 1399px) {
          .leadership-image-wrapper {
            width: 380px !important;
            height: 380px !important;
          }
        }
        @media (min-width: 1400px) {
          .leadership-image-wrapper {
            width: 470px !important;
            height: 470px !important;
          }
        }
      `}</style>
      
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#2D6C9B",
          position: "relative",
          display: "flex",
          alignItems: "center",
          "--content-margin-left": "17%",
          py: 8,
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            px: 0,
          }}
        >
          <Box
            className="leadership-content-container"
            sx={{
              ml: "var(--content-margin-left)",
              mr: "auto",
              maxWidth: "1200px",
              position: "relative",
            }}
          >
         

            {/* Two-column layout for content and image */}
            <Box
              className="leadership-layout"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 6,
                mb: 6,
              }}
            >
              {/* Left column - Text content */}
              <Box
                sx={{
                  flex: 1,
                  maxWidth: "485px",
                }}
              >
                     {/* Main Title */}
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                fontSize: "35px",
                lineHeight: "35px",
                letterSpacing: "0px",
                mb: 4,
                color: "white",
              }}
            >
              Wir haben kein Interesse daran, <br /> jemanden zu verlieren.
            </Typography>
                {/* Content Paragraph */}
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "28px",
                    letterSpacing: "0px",
                    color: "white",
                    mb: 4,
                  }}
                >
                  Unsere Vergangenheit hat gezeigt, dass Überforderung entsteht, wenn man Förderung nicht sauber kommuniziert. Wenn man glaubt, man "muss jetzt durchziehen". Wenn man den Eindruck bekommt: "Ich darf nicht zurück." Doch genau das ist
                  falsch.
                </Typography>

                {/* Yellow Article */}
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 500,
                    fontSize: "30px",
                    lineHeight: "46px",
                    letterSpacing: "0px",
                    color: "#FBDB12",
                  }}
                >
                  "THERAPIUM bleibt dein Zuhause – in jeder Rolle, die zu dir passt. Leadership ist nur eine davon."
                </Typography>
              </Box>

              {/* Right column - Image */}
              <Box
                className="leadership-image-container"
                sx={{
                  flexShrink: 0,
                  position: "relative",
                  // On larger screens, center the image in its space and push it further right
                  '@media (min-width: 1920px)': {
                    marginLeft: 'auto',
                    marginRight: '8%',
                    transform: 'translateX(20%)',
                  },
                }}
              >
                <Box
                  className="leadership-image-wrapper"
                  sx={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/enver-group.webp"
                    alt="Leadership Team Member"
                    width={469}
                    height={469}
                    style={{
                      borderRadius: "50%",
                      border: "4px solid #FBDB12",
                      objectFit: "cover",
                      objectPosition: "center 40%",
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                    priority
                  />
                </Box>
              </Box>
            </Box>

            {/* Leadership Title */}
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 700,
                fontSize: "50px",
                lineHeight: "65px",
                letterSpacing: "-1px",
                mb: 4,
                color: "white",
                maxWidth: "705px",
              }}
            >
              Führung heißt auch:
              <br />
              Klarheit.
            </Typography>

            {/* Final Content */}
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "28px",
                letterSpacing: "0px",
                color: "white",
                maxWidth: "705px",
              }}
            >
              Und du hast heute genau das bewiesen: Klarheit, Mut und Selbstverantwortung. Du kannst jederzeit zurückkommen. Nicht, um bei null zu starten. Sondern als das, was du bist: Ein Mensch mit Format – der seinen Weg kennt.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default LeadershipClaritySection;
