import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'

function EchoPost() {
  return (
    <article>
      <h3>記事のタイトル</h3>
    </article>
  )
}

export default function Home() {
  const subtitle = 'サブタイトルあああ'

  return (
    <>
      <header style={{ backgroundColor: '#c33' }}>HEADER!</header>

      <main>
        <h1 style={{ color: 'red', fontSize: '80px' }}>CUBE*a</h1>
        <hr />
        <p>{subtitle}</p>
        <EchoPost />
        <EchoPost />
      </main>

      <footer style={{ backgroundColor: '#3c3' }}>FOOTER!!</footer>
    </>
  )
}
