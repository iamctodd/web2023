import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-slate-800 transition hover:text-orange-500 dark:text-slate-200 dark:hover:text-orange-500"
      >
        <Icon className="h-6 w-6 flex-none fill-slate-500 transition group-hover:fill-orange-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - C. Todd Lombardo</title>
        <meta
          name="description"
          content="I&#39;m C. Todd Lombardo. I live in Salem, MA (and sometimes Madrid, Spain)"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-slate-100 object-cover dark:bg-slate-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-black tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
              ¡Hola! ¿Cómo estás? 
            </h1>
            <div className="mt-6 space-y-7 text-base text-slate-600 dark:text-slate-400">
              <p>
              My name is C. Todd Lombardo. I&#39;m a product leader and design strategist with over 15 years of experience in the tech industry. I specialize in helping companies build and launch successful digital products that solve real-world problems and delight users.
              </p>
              <p>
              In addition to my work in product design and strategy, I&#39;m also an accomplished author, speaker, and mentor. I&#39;ve spoken at conferences around the world on topics such as design thinking, innovation, and agile product development. I&#39;m also an active mentor and coach, and I enjoy helping aspiring product leaders develop the skills and mindset needed to succeed in this challenging field.
              </p>
              <p>
              I have co-authored three books on product and design, &#34;Design Sprint,&#34; &#34;Product Roadmaps Relaunched&#34; and most recently &#34;Product Research Rules,&#34; which have helped thousands of product teams around the world create better products faster.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/iamctodd" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://github.com/iamctodd" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/ctoddlombardo" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:hello@ctoddREMOVECAPS.com"
                icon={MailIcon}
                className="mt-8 border-t border-slate-100 pt-8 dark:border-slate-700/40"
              >
                hello@ctoddREMOVECAPS.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
