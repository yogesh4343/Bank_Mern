import React, { Fragment } from "react";
import { Typography, Stepper, StepLabel, Step } from "@material-ui/core";
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import "./CheckoutSteps.css";

const CheckoutSteps = ({ activeStep }) => {



  const steps = [
    {
      label: <Typography>Your Details</Typography>,
      icon: <Filter1Icon />,
    },
    {
      label: <Typography>Bank Details</Typography>,
      icon: <Filter2Icon />,
    },
    {
      label: <Typography>Confirm</Typography>,
      icon: <Filter3Icon />,
    },
  ];

  const stepStyles = {
    boxSizing: "border-box",
  };

  return (
    <Fragment>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "tomato" : "rgba(0, 0, 0, 0.649)",
              }}
              icon={item.icon}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Fragment>
  );
};

export default CheckoutSteps;