import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Container } from './styles';
import Babylon from '@/scenes/Babylon-Test1';
import Pixi from '@/scenes/Pixi-Test1';

import { parseExpression } from '@code/utils';

const Test: React.FC = () => {
  console.log(
    // parseExpression('x + y *(3+b(z,w,a, y)) - new Classe(2, y[u]).x'),
    parseExpression('a = x++ - --y && !a / !z(y--)[x++]'),
  );
  const { t } = useTranslation();
  return (
    <>
      <Babylon />
      <p>
        {t('code.errors.descriptions.non_existent_property', {
          property: 'propriedade',
          object: 'objeto',
        })}
      </p>
      <Pixi />
    </>
  );
};

export default Test;
