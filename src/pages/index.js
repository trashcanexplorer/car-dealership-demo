import Layout from '../components/layout'
import Link from 'next/link'
import { fetchData } from '../lib/fetchdata'

export async function getStaticProps() {
    const cars = await fetchData();
    for (let i = cars.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [cars[i], cars[j]] = [cars[j], cars[i]]; 
    }
    return {
        props: { cars }
    }
}

export default function Index({ cars }) {
    return (
        <Layout>
            <section class="mb-20 bg-[url('/car-dealership-demo/img/showroom.jpg')] bg-cover bg-center">
                <div class="h-screen flex items-center bg-black/70">
                    <div class="container mx-auto p-6">
                        <h1 class="mb-16 text-gold font-serif text-8xl">Lorem Ipsum</h1>
                        <p class="block mb-8">This dealership is fictional and does not exist. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Link href="/cars" class="transition ease-in-out delay-100 inline-block border-solid border-2 border-gold rounded-md bg-gold text-black px-3.5 py-2.5 hover:text-gold hover:bg-black mr-4">
                            Explore Our Collection
                        </Link>
                    </div>
                </div>
            </section>
            <section class="mb-20">
                <div class="container mx-auto p-6">
                    <h2 class="mb-16 text-gold font-serif text-6xl">Featured Cars</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 my-8">
                        {cars.map((car, index) => {
                            if (index < 4) {
                                return (
                                    <div key={index} class="border-solid border-2 border-gold bg-black p-6 xl:flex-1 flex-grow">
                                        <h3 class="mb-6 text-gold font-serif text-3xl">{car.brand} {car.model}</h3>
                                        <img class="mb-6 w-full h-auto" src={car.picture} alt="Picture of the car" />
                                        <div class="mb-2">{car.year}</div>
                                        <div class="mb-2">{car.mileage} mi</div>
                                        <div class="mb-2">${car.price}</div>
                                        <Link href={`/cars/${car.id}`} class="text-gold underline hover:text-white">View Details</Link>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div>
                        <Link href="/cars" class="transition ease-in-out delay-100 inline-block border-solid border-2 border-gold rounded-md bg-gold text-black px-3.5 py-2.5 hover:text-gold hover:bg-black mr-4">
                        See All Cars
                        </Link>
                    </div>
                </div>
            </section>
            <section class="mb-20">
                <div class="container mx-auto p-6">
                    <h2 class="mb-16 text-gold font-serif text-6xl">About Us</h2>
                    <p class="block my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <Link href="/contact" class="transition ease-in-out delay-100 inline-block border-solid border-2 border-gold rounded-md bg-gold text-black px-3.5 py-2.5 hover:text-gold hover:bg-black mr-4">
                        Contact Us
                    </Link>
                </div>
            </section>
        </Layout>
    );
}