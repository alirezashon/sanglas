import Image from 'next/image'
import styles from './page.module.css'
import Timeline from '@/components/TimeLine'
import EventCountdown from '@/components/Navigation'
import Information from '@/components/Information'
import Header from '@/components/Header'

const Home = () => {
  return (
    <>
      <Header />
      {/* <Timeline /> */}
      {/* <EventCountdown /> */}
      <Information />
    </>
  )
}

export default Home
