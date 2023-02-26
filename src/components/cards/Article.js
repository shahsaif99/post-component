import React from "react"


export default function Article(){
    return(
      


    <div className="bg-gray-100">
      <header className="bg-gray-900 py-4">
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            {/* <Image src="/logo.png" alt="Logo" height={32} width={32} /> */}
            <form className="ml-6">
              <input type="search" className="border-2 border-gray-600 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Search" />
            </form>
          </div>
          <ul className="flex items-center">
            <li className="ml-6"><a href="#" className="text-white font-bold">Home</a></li>
            <li className="ml-6"><a href="#" className="text-white font-bold">World</a></li>
            <li className="ml-6"><a href="#" className="text-white font-bold">Sports</a></li>
            <li className="ml-6"><a href="#" className="text-white font-bold">Opinion</a></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8"/>
        <article className="bg-white p-8 col-span-2">
          <h1 className="text-3xl font-bold mb-8">Turkey's Tragedy: A Timeline of the Van Earthquake</h1>
          {/* <Image src="/article-image.jpg" alt="Article Image" height={480} width={640} className="w-full mb-8" /> */}
          <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nunc eu magna lacinia, non iaculis ipsum ullamcorper. Sed rhoncus vestibulum sapien, quis tristique lacus eleifend sit amet. Suspendisse euismod, arcu sit amet dapibus consectetur, enim sapien luctus libero, in dapibus dolor nibh vitae nisl.</p>
          <p className="text-lg mb-8">Phasellus consectetur ante et tellus pulvinar, nec fringilla nisl pharetra. Curabitur semper, odio a commodo tristique, erat ante convallis velit, in interdum justo mauris eget velit. Vestibulum pharetra diam turpis, non efficitur nisi consequat non. Donec id lacus nunc.</p>
          <p className="text-lg mb-8">Sed gravida aliquam risus eget auctor. Nullam pulvinar elementum justo a rhoncus. Aliquam malesuada fermentum tellus, eu dictum libero dapibus at. Suspendisse vitae magna ullamcorper, molestie est sed, auctor nibh. Nunc id convallis odio. Nam malesuada ante at turpis efficitur, ac convallis neque aliquam.</p>
        </article>
        <aside className="bg-white p-8 col-span-1"/>
          <h2 className="text-xl font-bold mb-4">Latest News</h2>
          <ul className="list-disc ml-6">
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Article 1</a></li></ul>
</div>
    )
}