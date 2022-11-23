import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'

function Decoration(props) {
  return <div style={{ color: 'red' }}>{props.children}</div>
}

function EchoPost(props) {
  return (
    <article>
      <Decoration>
        <h3>{props.title}</h3>
        <hr />
      </Decoration>
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
        <EchoPost title="タイトル１" />
        <EchoPost title="タイトル２" />
      </main>

      <footer style={{ backgroundColor: '#3c3' }}>FOOTER!!</footer>
    </>
  )
}
