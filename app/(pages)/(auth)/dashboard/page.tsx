'use client'

import { PageContainer } from '@/app/components/UI/PageContainer/Page.Container'
import { TypographyTitle } from '@/app/components/UI/Typography/Typography.Title/WTypography.Title'
import { useBackdrop } from '@/app/hooks/UseBackdrop.hook'
import { useEffect } from 'react'

export default function Dashboard(){
  const backdrop = useBackdrop()

  useEffect(() => {
    backdrop.closeBackdrop()
  }, [])
  return (
  <PageContainer>
      <TypographyTitle text='testando' fontWeight={300}/>
  </PageContainer>
  )
}