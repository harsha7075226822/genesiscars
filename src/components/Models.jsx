import React from 'react'

function Card({ img, title, desc, href }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-sm text-neutral-300 mb-4">{desc}</p>
        <a className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-900 px-4 py-2 rounded text-sm font-medium">
          Explore More
        </a>
      </div>
    </div>
  )
}

export default function Models() {


  const cars = [
  {
    img: "https://www.carscoops.com/wp-content/uploads/2021/11/Genesis-Electrified-GV70-23.jpg",
    title: "ELECTRIFIED G80",
    desc: "The Electrified Genesis G80 merges luxury and sustainability, offering a smooth with advanced electric tech. It delivers impressive range and premium features for experience."
  },
  {
    img: "https://cdn.motor1.com/images/mgl/ZnybWz/s3/genesis-neolun-concept.jpg",
    title: "GENESIS G80",
    desc: "The Genesis GV80 Coupe blends sporty elegance with SUV practicality, featuring a dynamic design and powerful performance. It offers a luxurious, high-tech interior for experience."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTH1mNdNGCOATacEuS6TURu_X8bJdNrnWnkg&s",
    title: "GV80 COUPE BLACK",
    desc: "The Genesis G80 is a sophisticated luxury sedan that combines elegant design, advanced technology, and powerful performance."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyc8V-MUX-lM4XYN_1VyG74PiDD-g5_ZOrw&s",
    title: "GV90 LONG WHEEL",
    desc: "The Genesis GV90 Long Wheelbase redefines luxury with its spacious, elegant design and advanced technology.",
  },
  {
    img: "https://stat.overdrive.in/uploads/2024/07/Untitled-design-4-2024-07-54f7fbd16bf42a26705234298ab17f4e-900x506.png",
    title: "GV80 COUPE",
    desc: "The Genesis GV80 Coupe is a stylish SUV that combines sporty design with luxury and dynamic performance."
  },
  {
    img: "https://www.genesis.com/content/dam/genesis-p2/au/assets/genesis/brand-news/images/electrified-gv70-reveal-at-goodwood-fos/Electrified-GV70-001-945x450.jpg",
    title: "ELECTRIFIED GV70",
    desc: "The Electrified GV70 offers luxury, advanced technology, luxurious high performance and powerful all-electric performance in a sleek SUV design."
  }
];


  return (
    <section id="sectionmodels" className="py-12">
      <div className="container-fluid">
        <h1 className="text-3xl font-bold mb-6">~ MODELS</h1>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold">THE NEW ERA OF GENESIS</h2>
          <p className="text-neutral-300">Explore Genesis vehicle line-up with its dynamic yet elegant design and cutting-edge technology.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <Card
              key={index}
              img={car.img}
              title={car.title}
              desc={car.desc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
