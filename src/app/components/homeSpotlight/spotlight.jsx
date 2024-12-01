import React from 'react'

export function Spotlight({index, isAlt=false}) {
  let normalClasses = "wrapper spotlight style1";

  if(isAlt) {
    normalClasses = "wrapper spotlight style1 alt"
  }

  return (
    <section id={index} className={normalClasses}>
        <div className="inner">
            <a href="#" className="image"><img src="/images/test.png" alt="" /></a>
            <div className="content">
                <h2 className="major">Magna arcu feugiat</h2>
                <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
                <a href="#" className="special">Learn more</a>
            </div>
        </div>
	  </section>
  )
}

export const SpotlightParent = () => {
  const spotlights = [1, 2, 3, 4, 5]; // Example array to render multiple Test components

  return (
    <>
      {spotlights.map((_, index) => (
        <Spotlight index={index} key={index} isAlt={index % 2 !== 0} />
      ))}
    </>
  );
};

export default SpotlightParent;
