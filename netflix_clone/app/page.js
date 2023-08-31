import Image from 'next/image'

export default function Home() {

  //? nextjs'de tüm componentler default olarak server componentlerdir. Client component kullanmak için use-client direktifini kullanmak gerekir.

  return (
    <>
      <h1>Welcome NextJs</h1>
    </>
  )
}
