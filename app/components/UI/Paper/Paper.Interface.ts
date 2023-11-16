import { PaperProps } from "@mui/material"
import { ReactNode } from "react"

export interface WPaperProps extends PaperProps {
  children: ReactNode
  elevation?: number
}
