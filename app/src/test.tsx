import React from "react";
import { useTranslation } from "react-i18next";

import Welcome from "@/pages/welcome/welcome";

const Test: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Welcome />
      <p style={{ color: "#ffffff" }}>Typescript code</p>
    </>
  );
};

export default Test;
