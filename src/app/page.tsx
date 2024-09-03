import Image from 'next/image'
import styles from './page.module.css'
import Timeline from '@/components/TimeLine'
import Information from '@/components/Information'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'

const Home = () => {
  return (
    <>
      <Header />
      <Timeline />
      <Navigation />
      <Information />
    </>
  )
}

export default Home
