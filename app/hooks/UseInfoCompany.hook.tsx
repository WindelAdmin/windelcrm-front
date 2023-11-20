'use client'
import { useContext } from 'react'
import { CompanyContext } from '../context/UserContextCompany'

export interface CompanyProviderProps {
  id: number
  name: string
  cnpj: string
}

export interface InfoCompanyProps {
  infoCompany?: CompanyProviderProps
}

export const useInfoCompany = () => {
  const context: InfoCompanyProps = useContext(CompanyContext)
  return context.infoCompany
}
