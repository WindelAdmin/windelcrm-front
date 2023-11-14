import { ReactNode } from 'react'

export interface UserProviderProps {
  administrador: boolean
  cpfCnpj: string
  dataValidadeVersaoTeste: null
  email: string
  empresaId: number
  liberaCadastros: boolean
  liberaCompras: boolean
  liberaDashBoardCurvaAbcProd: boolean
  liberaDashBoardFatSemestral: boolean
  liberaDashBoardFinanceiro: boolean
  liberaDashBoardFluxoDiario: boolean
  liberaDashBoardFluxoMensal: boolean
  liberaDashBoardMaiorDespesa: boolean
  liberaDashBoardPagSemestral: boolean
  liberaDashBoardTopReceitas: boolean
  liberaDashboard: boolean
  liberaFinanceiro: boolean
  liberaIndGerais: boolean
  liberaIndProdutos: boolean
  liberaRelatorios: boolean
  liberaVendas: boolean
  name: string
  permissionCreate: boolean
  permissionDelete: boolean
  permissionUpdate: boolean
  tomadorDeDecisao: boolean
  usuarioId: number
  usuarioMaster: boolean
  usuarioPrincipal: boolean
  usuariosConectados: number
  usuariosSimultaneos: number
  versaoTeste: boolean
}

export interface UserProviderContextProps {
  children: ReactNode
}

export interface InfoUserProps {
  infoUser?: UserProviderProps
}
export interface UserProps {
  email?: string;
  token?: string;
  expiredTest: boolean;
  userNotFound: boolean;
  hasAuthError: boolean;
  userUnauthorized: boolean;
  userMaxNumber: boolean;
  enterpriseInfo: string;
  regPerPage: number;
}

export interface ContextProps extends UserProps {
  authenticate: (
    email: string,
    password: string,
    setBackdrop: any,
    backdrop: boolean
  ) => Promise<void>;
  logout: () => void;
  closeExpiredTestModal: () => void;
  closeUserNotFoundModal: () => void;
  closeHasAuthErrorModal: () => void;
  closeUserUnauthorizedModal: () => void;
  closeUserMaxNumber: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
