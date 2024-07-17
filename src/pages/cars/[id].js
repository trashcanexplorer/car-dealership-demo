import Layout from '../../components/layout'
import Link from 'next/link'
import { fetchData } from '../../lib/fetchdata'
import { useRouter } from 'next/router'
import { getCarData } from '../../lib/cars';

export async function getStaticPaths() {
    const cars = await fetchData();
    const paths = cars.map((car) => ({
        params: { id: car.id.toString() },
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const carData = await getCarData(params.id);
    const car = carData.carData;
    return {
        props: {
            car
        }
    }
}

export default function Car({ car }) {
    const router = useRouter();
    return(
         <Layout>
            <section class="mb-20">
                <div class="container mx-auto p-6">
                        <h1 class="mb-16 text-gold font-serif text-6xl">{car.brand} {car.model}</h1>
                        <div class="flex flex-col lg:flex-row">
                            <div class="lg:w-4/12 mr-8">
                                <img class="mb-6" src={car.picture} alt="Picture of the car" />
                            </div>
                            <div class="lg:w-8/12">
                                <div class="mb-2 text-gold text-xl font-serif">Year:</div>
                                <div class="mb-4">{car.year}</div>
                                <div class="mb-2 text-gold text-xl font-serif">Mileage:</div>
                                <div class="mb-4">{car.mileage} mi</div>
                                <div class="mb-2 text-gold text-xl font-serif">Details:</div>
                                <div class="mb-4" dangerouslySetInnerHTML={{ __html: car.description }}></div>
                                <div class="text-gold text-xl font-serif">Price:</div>
                                <div class="text-2xl mt-2 mb-8">${car.price}</div>
                                <div>
                                    <Link href="/cars" class="transition ease-in-out delay-100 inline-block border-solid border-2 border-gold rounded-md bg-gold text-black px-3.5 py-2.5 hover:text-gold hover:bg-black mr-4">
                                    See All Cars
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </Layout>
    )
}