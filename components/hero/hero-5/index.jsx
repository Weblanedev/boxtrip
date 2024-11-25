// import MainFilterSearchBox from "./MainFilterSearchBox";

const Index = () => {
  return (
    <section className="masthead -type-5">
      <div className="masthead__bg">
        <img alt="image" src="/img/masthead/5/bg.svg" className="js-lazy" />
      </div>
      {/* End bg image */}

      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <h1
              className="text-60 lg:text-40 md:text-30"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Best Travel{" "}
              <span className="text-blue-1 relative">
                Experience{" "}
                <span className="-line">
                  <img src="/img/general/line.png" alt="image" />
                </span>
              </span>
            </h1>
            <p className="mt-20" data-aos="fade-up" data-aos-delay="500">
              Let us take you to the Best Destinations in the world at the
              cheapest rate.
              <br className="lg:d-none" />
              You can rely on our professional guide for the best tour ever.
            </p>

            {/* <MainFilterSearchBox /> */}
            {/* End filter content */}
          </div>
        </div>
      </div>
      {/* End .container */}

      <div className="masthead__image" data-aos="fade">
        <img src="/img/masthead/5/1.png" alt="image" />
      </div>
      {/* End .masthead__image */}
    </section>
  );
};

export default Index;
