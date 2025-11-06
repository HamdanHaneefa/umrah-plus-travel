import ReactGA from "react-ga4";

// Replace with your Google Analytics measurement ID
const MEASUREMENT_ID = "G-3XCR7ECRY9";

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const logPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
