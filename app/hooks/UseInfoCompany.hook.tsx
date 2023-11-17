'use client'
import { useContext } from 'react'
import { CompanyContext } from '../context/UserContextCompany'

export interface CompanyProviderProps {
  id: number
  name: string
  fantasyName: string
  cpfCnpj: string
  email: string
  phone: string
}

export interface InfoCompanyProps {
  infoEmpresa?: CompanyProviderProps
}

export const useInfoCompany = () => {
  const context: InfoCompanyProps = useContext(CompanyContext)

  return context.infoEmpresa
}
