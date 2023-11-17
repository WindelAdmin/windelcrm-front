import { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';

import { AxiosError } from 'axios';
import { api } from '@/services/ApiService/axios.service';


export const useWForm = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSave = useCallback(async (routerAPI: string, values: any) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await api.post(routerAPI, {
        ...values,
      });
      return response;
    } catch (error) {
      const err = error as AxiosError;
      return err;
    }
  }, []);

  const handleEdit = useCallback(async (routerAPI: string, values: any) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await api.patch(routerAPI, {
        ...values,
      });
      return response;
    } catch (error) {
      const err = error as AxiosError;
      return err;
    }
  }, []);

  return {
    formRef,
    handleSave: handleSave,
    handleEdit: handleEdit,
  };
};
