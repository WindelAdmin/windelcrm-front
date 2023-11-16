import { ReactNode } from 'react'

export interface EmpresaProviderProps {
  bairro: string
  cep: string
  complemento: string
  contato: string
  cpfCnpj: string
  dataValidadeTeste: string
  email: string
  id: number
  inadimplente: boolean
  liberaCadastros: boolean
  liberaCompras: boolean
  liberaDashboard: boolean
  liberaFinanceiro: boolean
  liberaRelatorios: boolean
  liberaVendas: boolean
  nome: string
  nomefantasia: string
  numero: string
  rua: string
  telefone: string
  usuariosSimultaneos: number
  versaoTeste: boolean
  cidade: CityEmpresaProps
  estado: StateEmpresaProps
}

interface CityEmpresaProps {
  codigoIBGE: number
  id: number
  nome: string
}

interface StateEmpresaProps {
  UF: string
  id: number
  nome: string
}

export interface EmpresaProviderContextProps {
  children: ReactNode
}

export interface InfoEmpresaProps {
  infoEmpresa?: EmpresaProviderProps
}
