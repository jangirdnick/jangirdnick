import SectionHeading from '../../components/SectionHeading';
import StarSvg from '../../components/StarSvg';
import Paragraph from '../../components/paragraph/Paragraph';

export default function WorkSection({ projectLength }: { projectLength: number }) {
  return (
    <section className="w-full px-4 md:px-12 pt-[30vw] md:pt-36 xl:pt-50 space-y-5 tracking-[-0.04em]">
      <SectionHeading title="Projects" />

      <div className="flex items-end justify-between gap-4">
        <Paragraph
          text="Websites built with attention"
          className=" w-[70%]! md:w-1/2 lg:w-1/4! tracking-[-0.04em]! max-md:text-[9vw]!"
        />

        <div>
          <span className="flex text-3xl md:text-4xl opacity-20 gap-1">
            0{projectLength}
            <StarSvg className="fill-foreground! mt-0.5" />
          </span>
        </div>
      </div>
    </section>
  );
}
