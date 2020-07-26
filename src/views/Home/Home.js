import React from 'react'
import { useTranslation } from 'react-i18next'

import Head from '../../components/Head'

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {t('welcome')}
    </>
  )
}

export default Home
