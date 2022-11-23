import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const subtitle = 'サブタイトルあああ'

  return (
    <>
      <h1 style={{ color: 'red', fontSize: '80px' }}>CUBE*a</h1>
      <hr />
      <p>{subtitle}</p>
    </>
  )
}
