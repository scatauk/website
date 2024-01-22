import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="m-5 flex text-lg text-body-color lg:w-auto">
      <span className="mr-4 flex size-10 p-4 h-[20px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-12 md:pt-14 lg:pt-20">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] xs:pb-0 md:pb-20 lg:pb-28">
          <SectionTitle
            title="Aims and Objectives"
            paragraph="Established in 1987, we are a specialist medical society and charity. Our aims are:"
            mb="44px"
          />
          <div className="-mx-4 flex flex-wrap w-full">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-full lg:w-full">
                    <List text="Promote, fund and disseminate the results of research into the use of technology in anaesthesia and perioperative care" />
                    <List text="Promote and facilitate education and training in digital health, with a focus on perioperative care" />
                    <List text="Work in partnership with similar organisations such as ESCTAIC in Europe and the STA in the United States" />
                    <List text="Encourage engagement of clinicians in ISOs such as HL7-FHIR, OpenEHR and SNOMED-CT through membership and partnership" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 mt-5 xs:hidden lg:inline">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image-page.png"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-page.png"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
