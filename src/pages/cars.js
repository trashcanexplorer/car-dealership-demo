import Layout from '../components/layout'
import Link from 'next/link'
import { fetchData } from '../lib/fetchdata'

export async function getStaticProps() {
    const cars = await fetchData();
    return {
        props: { cars }
    }
}

export default function Cars({ cars }) {
    return (
        <Layout>
            <section class="mb-20">
                <div class="container mx-auto p-6">
                    <h1 class="mb-16 text-gold font-serif text-6xl">Our Collection</h1>
                    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-4 my-8">
                        {cars.map((car, index) => {
                            return (
                                <div key={index} class="border-solid border-2 border-gold bg-black p-6 flex-1 flex-grow">
                                    <h2 class="mb-6 text-gold font-serif text-3xl">{car.brand} {car.model}</h2>
                                    <img class="mb-6" src={car.picture} alt="Picture of the car" />
                                    <div class="mb-2">{car.year}</div>
                                    <div class="mb-2">{car.mileage} mi</div>
                                    <div class="mb-2">${car.price}</div>
                                    <Link href={`/cars/${car.id}`} class="text-gold underline hover:text-white">View Details</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </Layout>
    );
}