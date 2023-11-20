'use client'

import { PageContainer } from '@/app/components/UI/PageContainer/Page.Container'
import { TypographyTitle } from '@/app/components/UI/Typography/Typography.Title/WTypography.Title'
import { useInfoCompany } from '@/app/hooks/UseInfoCompany.hook'
import { useEffect } from 'react'

export default function Dashboard(){
  const company = useInfoCompany()

useEffect(() => {
    console.log(company);
})
  
  return (
    <PageContainer>
      <TypographyTitle text='testando' fontWeight={300}/>
  </PageContainer>
  )
}