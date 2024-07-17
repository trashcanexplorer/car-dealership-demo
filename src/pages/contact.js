import Layout from '../components/layout'

export default function Contact() {
    return (
        <Layout>
            <section class="mb-20">
                <div class="container mx-auto p-6">
                    <h1 class="mb-16 text-gold font-serif text-6xl">Contact Us</h1>
                    <div class="mb-8 w-full h-96 overflow-hidden">
                        <img class="object-cover object-center w-full h-96" src="/img/showroom.jpg" alt="Showroom" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Sales: <a class="text-gold hover:text-white hover:underline" href="tel:+12131231234">+1 (213) 123-1234</a></p>
                    <p>Service: <a class="text-gold hover:text-white hover:underline" href="tel:+12131231234">+1 (213) 123-1234</a></p>
                    <h2 class="mt-16 mb-8 text-gold font-serif text-4xl">Our Location</h2>
                    <p class="mb-2">1234 Santa Monica Blvd, Beverly Hills, CA 90210, United States</p>
                    <iframe class="border-none" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.574324450862!2d-118.39348092376171!3d34.080424773146525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bea8458fde3f%3A0x64fb70e2c3e49008!2s1234%20Santa%20Monica%20Blvd%2C%20Beverly%20Hills%2C%20CA%2090210%2C%20USA!5e0!3m2!1sen!2sfi!4v1720695411642!5m2!1sen!2sfi" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <h2 class="mt-16 mb-8 text-gold font-serif text-4xl">Business Hours</h2>
                    <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                    <p>Sat: 10:00 AM - 3:00 PM</p>
                    <p>Sun: Closed</p>
                    <h2 class="mt-16 mb-8 text-gold font-serif text-4xl">Leave Us a Message</h2>
                    <form class="md:w-2/3 lg:w-1/2">
                        <label class="block mb-2" for="name">Name:</label>
                        <input class="w-full border-2 border-gold bg-black text-white p-2 mb-2" type="text" id="name" name="name" />
                        <label class="block mb-2" for="email">Email:</label>
                        <input class="w-full border-2 border-gold bg-black text-white p-2 mb-2" type="email" id="email" name="email" />
                        <label class="block mb-2" for="phone">Phone:</label>
                        <input class="w-full border-2 border-gold bg-black text-white p-2 mb-2" type="text" id="phone" />
                        <label class="block mb-2" for="message">Message:</label>
                        <input class="w-full border-2 border-gold bg-black text-white p-2 mb-4 h-60" type="textarea" rows="8" id="message" name="message" />
                        <br />
                        <input class="transition ease-in-out delay-100 inline-block border-solid border-2 border-gold rounded-md bg-gold text-black px-3.5 py-2.5 hover:text-gold hover:bg-black" type="submit" value="Submit" />
                    </form>
                </div>
            </section>
        </Layout>
    );
}