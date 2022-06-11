import React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Box, CardMedia } from "@mui/material";

const styleImage = {
  maxWidth: "100vw",
  height: "300px",
  objectFit: "fill",
  opacity: "0",
  transition: "1s",
  "&.loaded": {
    opacity: "1",
  },
  ":hover": {
    cursor: "pointer",
  },
};

const steps = 4;
const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const Carrusel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedImage, setSelectedImage] = React.useState(images[0]);
  const [loaded, setLoaded] = React.useState(false);

  const selectNewImage = (index, imagesArray, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? activeStep < imagesArray.length - 1
        : activeStep > 0;
      const nextIndex = next
        ? condition
          ? activeStep + 1
          : 0
        : condition
        ? activeStep - 1
        : imagesArray.length - 1;
      setSelectedImage(imagesArray[nextIndex]);
      setActiveStep(nextIndex);
    }, 500);
  };

  const handleNext = () => {
    selectNewImage(activeStep, images);
  };

  const handleBack = () => {
    selectNewImage(activeStep, images, false);
  };

  const clic = () => {
    console.log("clic");
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedImage, images);
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CardMedia
        component="img"
        image={selectedImage.imgPath}
        alt={selectedImage.label}
        sx={styleImage}
        onLoad={() => setLoaded(true)}
        className={loaded ? "loaded" : ""}
        onClick={clic}
      />
      <MobileStepper
        variant="dots"
        steps={steps}
        position="static"
        activeStep={activeStep}
        sx={{
          maxWidth: 400,
          flexGrow: 1,
          bgcolor: "transparent",
          ".MuiMobileStepper-dot": { bgcolor: "red" },
          ".MuiMobileStepper-dotActive": { bgcolor: "black" },
        }}
        nextButton={
          <Button size="small" onClick={handleNext}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
};

// Carrusel.propTypes = {
//   steps: PropTypes.number.isRequired,
//   images: PropTypes.arrayOf(
//     PropTypes.shape({ label: PropTypes.string, imgPath: PropTypes.string }),
//   ).isRequired,
// };

export default Carrusel;
