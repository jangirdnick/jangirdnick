import React from 'react'
import SectionHeading from '../../../../components/SectionHeading'
import Paragraph from '../../../../components/paragraph/Paragraph'
import Button from '../../../../components/Button'

export default function AboutSection
() {
  return (
    <section className="w-full">
      <div className="px-12 py-28 flex flex-col gap-10 tracking-[-0.04em]">

        <SectionHeading />

        <div>
          {/* <p className="text-5xl w-3/4 leading-[1.3]">
              I create thoughtful digital experiences that go beyond simply looking good.
              I design and build modern, personalized websites that reflect my skills, creativity, and passion for the web.
            </p> */}

          <Paragraph
            offset={["start 0.95", "start 0.5"]}
            text="I create thoughtful digital experiences that go beyond simply looking good. 
            I design and build modern, personalized websites that reflect my skills, creativity, and passion for the web." />
        </div>

        <div>
          <Button />
        </div>
      </div>
    </section>
  )
}
