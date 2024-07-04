import React from 'react';
import CarCard from '../components/CarCard';

const Cars = () => {
    return (
        <section className="px-full py-16 bg-black">
            <div className="container mx-auto py-12">
                <section className="py-12">
                    <div className="container mx-auto">
                        <h2 className="text-3xl text-white font-bold text-center mb-8">Our Cars</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <CarCard
                                imgSrc="https://images.pexels.com/photos/4141954/pexels-photo-4141954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                title="Rolls Royce"
                                description="Wraith"
                                link="https://www.carwow.co.uk/car-reviews#make-model-menu"
                            />
                            <CarCard
                                imgSrc="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?cs=srgb&dl=pexels-mikebirdy-112460.jpg&fm=jpg&_gl=1*6kryi3*_ga*MTU4OTAzNjc0LjE3MTkxNDkyMzU.*_ga_8JE65Q40S6*MTcxOTQ4MTAxOC4zLjEuMTcxOTQ4MTM4MS4wLjAuMA.."
                                title="Mercedes Benz"
                                description="AMG GT"
                                link="https://www.carwow.co.uk/mercedes/amg-gt-coupe"
                            />
                            <CarCard
                                imgSrc="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                title="Audi"
                                description="RS5"
                                 link="https://www.carwow.co.uk/audi/rs5"
                            />
                            <CarCard
                                imgSrc="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                title="Land Rover"
                                description="Evoque"
                                link="https://www.carwow.co.uk/land-rover/range-rover-evoque"
                            />
                            <CarCard
                                imgSrc="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                title="Audi"
                                description="R8"
                                link="https://www.carwow.co.uk/audi/r8"
                            />
                            <CarCard
                                imgSrc="https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                title="Mercedes Benz"
                                description="SLC 500"
                                link="https://www.carwow.co.uk/car-reviews#make-model-menu"
                            />
                            <CarCard
                                imgSrc="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                title="BMW"
                                description="3 Series"
                                link="https://www.carwow.co.uk/bmw/3-series-touring"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Cars;
