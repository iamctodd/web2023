import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{description}</Card.Description>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Writing - C. Todd Lombardo</title>
        <meta
          name="description"
          content="A few of the books I have written on product and design."
        />
      </Head>
      <SimpleLayout
        title="Books I have written on product and design"
        intro="One of my favorite ways to share knowledge is via writing (and teaching)."
      >
        <div className="space-y-20">
          <SpeakingSection title="November 2020">
            <Appearance
              href="https://www.oreilly.com/library/view/product-research-rules/9781492049463/"
              title="Product Research Rules"
              description="Digital product research doesn't have to be difficult, take a long time, or cost a lot of money. Nor should it be a job solely for scientists or expert researchers. In this practical book, Aras Bilgen, C. Todd Lombardo, and Michael Connors demonstrate how your entire team can conduct effective product research within a couple of weeks--easily, cheaply, and without compromising quality."
              event="O'Reilly Media, Inc."
              cta="Learn More"
            />
          </SpeakingSection>
          <SpeakingSection title="October 2017">
            <Appearance
              href="https://www.oreilly.com/library/view/product-roadmaps-relaunched/9781491971710/"
              title="Product Roadmaps Relaunched"
              description="This practical guide teaches you how to create an effective product roadmap, and demonstrates how to use the roadmap to align stakeholders and prioritize ideas and requests. With it, you'll learn to communicate how your products will make your customers and organization successful."
              event="O'Reilly Media, Inc"
              cta="Learn More"
            />
          </SpeakingSection>
          <SpeakingSection title="September 2015">
            <Appearance
              href="https://www.oreilly.com/library/view/design-sprint/9781491923160/"
              title="Design Sprint"
              description="With more than 500 new apps entering the market every day, what does it take to build a successful digital product? You can greatly reduce your risk of failure with design sprints, a process that enables your team to prototype and test a digital product idea within a week. This practical guide shows you exactly what a design sprint involves and how you can incorporate the process into your organization."
              event="O'Reilly Media, Inc."
              cta="Learn More"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
