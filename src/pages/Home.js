import React from 'react';
import Hero from '../components/Hero';
import CarCard from '../components/CarCard';

const Home = () => {
    return (
        <>
            <Hero />
            <section className="py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Cars</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <CarCard 
                            imgSrc="https://images.pexels.com/photos/4141954/pexels-photo-4141954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                         
                           title="ROLLS ROYCE" 
                            description="Wraith" 
                        />
                        <CarCard 
                            imgSrc="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?cs=srgb&dl=pexels-mikebirdy-112460.jpg&fm=jpg&_gl=1*6kryi3*_ga*MTU4OTAzNjc0LjE3MTkxNDkyMzU.*_ga_8JE65Q40S6*MTcxOTQ4MTAxOC4zLjEuMTcxOTQ4MTM4MS4wLjAuMA.." 
                            title="Mercedes Benz" 
                            description="AMG GT" 
                        />
                        <CarCard 
                            imgSrc="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            title="AUDI" 
                            description="RS5." 
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;

