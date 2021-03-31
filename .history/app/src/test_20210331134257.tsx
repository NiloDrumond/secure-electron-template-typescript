import React from "react";
import { useTranslation } from "react-i18next";
const Test: React.FC = () => {
  const { t } = useTranslation();
  return <p color="#ffff">Typescript code</p>;
};

export default Test;
