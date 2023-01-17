// import Image from "next/future/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/header.module.css"

export default function Header() {

  const router = useRouter()

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <nav className={styles.navegacion}>
          <Link href={'/'}>
            home
          </Link>
          <Link href={'/about'}>
            about
          </Link>
          <Link href={'/store'}>
            store
          </Link>
          <Link href={'/blog'}>
            blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
