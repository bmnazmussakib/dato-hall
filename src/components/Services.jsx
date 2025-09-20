import React from 'react';
import Container from './common/Container';

const ServiceCard = ({ number, title, subtitle, imageUrl }) => (
  <div
    className="relative rounded-2xl bg-cover bg-center group overflow-hidden"
  // style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div className="absolute inset-0 bg-black opacity-30 group-hover:bg-opacity-60 transition-all duration-300"></div>
    <div>
      <img src={imageUrl} alt="" className='aspect-[3/2] object-cover overflow-hidden w-full h-auto' />
    </div>
    <div className="absolute top-0 z-10 p-12 flex flex-col justify-between text-white h-full">
      <p className="text-3xl font-semibold">{number}</p>
      <div className="transform  transition-transform duration-300">
        <p className="text-sm opacity-90">{subtitle}</p>
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>
    </div>
  </div>
);

const Services = () => {
  const services = [
    { number: '01.', title: 'Panel Cleaning', subtitle: 'Consectetur adipiscing', imageUrl: '/assets/images/service-1.jpg' },
    { number: '02.', title: 'Maintenance', subtitle: 'Consectetur adipiscing', imageUrl: '/assets/images/service-2.jpg' },
    { number: '03.', title: 'Calibration', subtitle: 'Consectetur adipiscing', imageUrl: '/assets/images/service-3.jpg' },
    { number: '04.', title: 'Panel Cleaning', subtitle: 'Consectetur adipiscing', imageUrl: '/assets/images/service-1.jpg' },
    { number: '05.', title: 'Maintenance', subtitle: 'Consectetur adipiscing', imageUrl: '/assets/images/service-2.jpg' },
    { number: '06.', title: 'Calibration', subtitle: 'Consectetur adipiscing', imageUrl: '/assets/images/service-3.jpg' },
  ];

  return (
    <>
      <section className="py-24 bg-slate-50">
        <Container>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {services.map(service => <ServiceCard key={service.title} {...service} />)}
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard 
              key={service.title + "2"} 
              {...service} 
              imageUrl={service.imageUrl.replace('seed/', 'seed/clone')} 
            />
          ))}
        </div> */}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
