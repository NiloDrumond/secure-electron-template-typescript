import React from "react";
import { useTranslation } from "react-i18next";
// import { Container } from './styles';
//import Babylon from '@/scenes/Babylon-Test1';
//import Pixi from '@/scenes/Pixi-Test1';

const Test: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* <Babylon /> */}
      <p>
        {t("code.errors.descriptions.non_existent_property", {
          property: "propriedade",
          object: "objeto",
        })}
      </p>
      {/* <Pixi /> */}
    </>
  );
};

export default Test;
