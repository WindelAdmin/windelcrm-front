'use client';

import { WButton } from '@/app/components/Button/WButton';
import { FormContainer } from '@/app/components/Form/Form.Container';
import { ContainerButtons } from '@/app/components/Form/Form.Container.Buttons';
import { FormHeader } from '@/app/components/Form/Form.Header';
import { GridContainer } from '@/app/components/Grid/GridContainer';
import { GridContainerCard } from '@/app/components/Grid/GridContainerCard';
import { GridContainerForm } from '@/app/components/Grid/GridContainerForm';
import { GridItem } from '@/app/components/Grid/GridItem';
import { WDatePicker } from '@/app/components/Inputs/WDatePicker';

import { WInputCurrency } from '@/app/components/Inputs/WInputCurrency';
import { WMultilineInput } from '@/app/components/Inputs/WInputMultine';
import { Box, Grid, Switch } from '@mui/material';

import { Form } from '@unform/web';
import { watch } from 'fs';
import { register } from 'module';
import router from 'next/router';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ptBR from 'date-fns/locale/pt-BR';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { WInput } from '@/app/components/Inputs/WInput';
import { WInputDecimal } from '@/app/components/Inputs/WInputDecimal';
import { WInputIcon } from '@/app/components/Inputs/WInputIcon';
import { WInputPassword } from '@/app/components/Inputs/WInputPassword';
import { WInputPercent } from '@/app/components/Inputs/WInputPercent';
import { WSelect } from '@/app/components/Inputs/WSelect';
import { WSelectStatic } from '@/app/components/Inputs/WSelectStatic';
import { WSwitch } from '@/app/components/Inputs/WSwitch';
import { WDateTimePicker } from '@/app/components/Inputs/WTimeDatePicker';
import { WModal } from '@/app/components/Modal/Modal';
import { SkeletonTable } from '@/app/components/Skeleton/Skeleton.Table/Skeleton.Table';
export default function TestePage() {
  return (
      <h1>donay</h1>
   );
}
