import dynamic from "next/dynamic";
import Header1 from "@/components/header/header-1";
import Hero5 from "@/components/hero/hero-5";
import Hero1 from "@/components/hero/hero-1";
import Link from "next/link";
import DefaultFooter from "@/components/footer/default";
import Tours2 from "@/components/tours/Tours2";
import TourCategories from "@/components/home/home-5/TourCategories";
import Locations from "@/components/home/home-5/Locations";
import CallToActions from "@/components/home/home-5/CallToActions";
import Blog from "@/components/blog/Blog3";
import Tours3 from "@/components/tours/Tours3";
import DiscountsBanner from "@/components/home/home-5/DiscountsBanner";
import Counter3 from "@/components/counter/Counter3";
import WhyChooseUs from "@/components/home/home-5/WhyChooseUs";
import Testimonial from "@/components/home/home-5/Testimonial";
import Brand2 from "@/components/brand/Brand2";

export const metadata = {
  title: "Home-5 || BoxTrip - Travel & Tour React NextJS Template",
  description: "BoxTrip - Travel & Tour React NextJS Template",
};

const home_5 = () => {
  return (
    <>
      {/* End Page Title */}

      <Header1 />
      {/* End Header 5 */}

      <Hero5 />
      {/* <Hero1 /> */}
      {/* End Hero 5 */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Affordable Tours</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Cheap travel bookings for you
                </p>
              </div>
            </div>
            {/* End .col */}

            {/* <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div> */}
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Tours Sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Choose Tour Types</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Whatever relaxing experience you seek
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="d-flex x-gap-15 items-center ">
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-left-hover js-tour-type-prev">
                    <i className="icon icon-arrow-left" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination -dots text-border js-tour-type-pag" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-tour-type-next">
                    <i className="icon icon-arrow-right" />
                  </button>
                </div>
                {/* End next */}
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="relative overflow-hidden pt-40 sm:pt-20">
            <TourCategories />
          </div>
        </div>
      </section>
      {/* End Tours Categories */}

      {/* <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Explore Hot Locations</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col 

            <div className="col-auto">
              <a
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </a>
            </div>
            {/* End .col 
          </div>
          {/* End .row 

          <div className="row y-gap-30 pt-40 sm:pt-20">
            <Locations />
          </div>
          {/* End .row 
        </div>
        {/* End .container 
      </section> */}
      {/* End Explore Hot Locations */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <Counter3 />
          </div>
        </div>
      </section>
      {/* End counter up Section */}

      <section className="section-bg layout-pt-lg md:pt-0 md:pb-60 sm:pb-40 layout-pb-lg bg-blue-1-05">
        <WhyChooseUs />
      </section>
      {/* End whycosse Section */}

      <section className="section-bg layout-pt-lg">
        <div className="section-bg__item col-12">
          <img src="/img/backgrounds/testimonials/bg.png" alt="image" />
        </div>
        {/* End bg image */}

        <div data-aos="fade-up" data-aos-delay="100" className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Customer Reviews</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Hear what our customers have to say
                </p>
              </div>
            </div>
            {/* End .col-auto */}
          </div>
          {/* End .row */}

          <div className="row justify-center pt-60 md:pt-30">
            <div className="col-xl-5 col-lg-8 col-md-11">
              <div className="overflow-hidden">
                <Testimonial />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Customer review Section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="text-15 lh-1">Trusted by the world’s best</div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between items-center pt-60 lg:pt-40 sm:pt-20">
            <Brand2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End brand partner Section */}

      <CallToActions />
      {/* End CallToActions */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_5), { ssr: false });
