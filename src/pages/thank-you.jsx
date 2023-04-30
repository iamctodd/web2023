import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>You’re subscribed - C Todd Lombardo</title>
        <meta
          name="description"
          content="Thanks for subscribing to my occasional post."
        />
      </Head>
      <SimpleLayout
        title="Thanks for subscribing."
        intro="I’ll send you an message any time I have something interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}
