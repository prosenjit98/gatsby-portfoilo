import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return <Layout>
    <section className={styles.header}>
      <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>Ux design & web developer based in India</p>
        <Link to="/projects" className={styles.btn}>My Portfolio Projects</Link>
      </div>
      <StaticImage src="../images/banner.svg" alt="" />
    </section>
  </Layout>
}