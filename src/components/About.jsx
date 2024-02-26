import { aboutData } from '../data'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

export default function About() {

  const { title, subtitle1, subtitle2 } = aboutData

  return (
    <section className="lg:py-16 xl:pb-[160px]">
      <div className="container mx-auto">
        <div
          id="about"
          className="flex flex-col lg:flex-row gap-x-[70px] items-center"
        >
          {/* number */}
          <motion.div
            className="flex flex-col flex-1 lg:flex-row"
            variants={fadeIn('right')}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
          >
            <div className=" xl:text-[620px] leading-none  bg-about bg-no-repeat bg-right  text-transparent">
              27
            </div>
          </motion.div>
          {/* text */}
          <motion.div
            className="flex-1 h-full xl:mt-48"
            variants={fadeIn('left')}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
          >
            <h2 className="h2">{title}</h2>
            <div className="flex flex-col items-end">
              <div className="max-w-[530px] text-grey">
                <p className="mb-6">{subtitle1}</p>
                <p className="mb-9">{subtitle2}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
