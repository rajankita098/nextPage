import Image from 'next/image';

const MainBanner = () => {
  return (
    <>
      <div className="row featurette p-5">
        <div className="col-md-7">
          <h2 className="featurette-heading">Across The Globe<span className="text-muted"></span></h2>
          <p className="lead">It is an interest based social network platform where people Across The Globe connect, collaborate, learn and inspire each other.</p>
        </div>
        <div className="col-md-5">
          <Image src="data:image/jpeg;base64,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" width={500} height={500} alt="Description" />
        </div>
      </div>
      <hr className="featurette-divider" />
      <hr className="featurette-divider" />
    </>
  );
};

export default MainBanner;
