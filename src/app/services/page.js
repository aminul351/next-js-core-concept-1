import Link from 'next/link';

export default function ServicesPage() {

  const data = [
    {
      "id": 1,
      "name": "Web Development",
      "description": "Custom website and web app development using modern technologies.",
      "price": "Starting from $500",
      "image": "/images/web-development.jpg"
    },
    {
      "id": 2,
      "name": "Mobile App Development",
      "description": "Cross-platform and native mobile app development for iOS and Android.",
      "price": "Starting from $800",
      "image": "/images/mobile-app.jpg"
    },
    {
      "id": 3,
      "name": "SEO Optimization",
      "description": "Improve search engine ranking and organic traffic growth.",
      "price": "Starting from $300",
      "image": "/images/seo.jpg"
    }
  ]

  console.log(data);
  return (
    <div>
      <h2>ServicesPage</h2>
      {
        data.map(datum => (
          <div key={datum.id} className='border p-6 m-12'>
             <Link href={`/services/${datum.id}`}><h3>Title : {datum.name}</h3></Link>
          </div>
        ))
      }

    </div>


  )
}
