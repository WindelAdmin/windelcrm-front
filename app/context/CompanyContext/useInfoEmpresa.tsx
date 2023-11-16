'use client'
import { useContext } from 'react'
import { InfoEmpresaProps } from './interface'
import { EmpresaContext } from './userContextEmpresa'

export const useInfoEmpresa = () => {
  const context: InfoEmpresaProps = useContext(EmpresaContext)

  return context.infoEmpresa
}
