import React from 'react'
import Swipper from '../Swipper/Swipper'
import {useTranslation} from 'react-i18next'


export default function Sertificate() {
  const {t} = useTranslation();

  return (
    <div className='my-5'>
      <h2 className='text-center title fs-1'>{t("Sertificat")}</h2>
      <Swipper/>
    </div>
  )
}
