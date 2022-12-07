import Wrapper from './components/Wrapper'

function App() {
  return (
    <Wrapper>
      <main className="w-full max-w-[345px] rounded-lg overflow-hidden shadow-md bg-white">
        <div>
          <picture>
            <source
              srcSet="/image-product-desktop.jpg"
              media="(min-width: 600px)"
            />
            <img
              src="/image-product-mobile.jpg"
              alt="Gabrielle Essense perfume bottle laying flat on a table with green leaves above and below it"
            />
          </picture>
        </div>
        <div className="p-6 text-neutral-400 flex flex-col gap-4 ">
          <p className="font-secondary text-xs tracking-[.3rem]">PERFUME</p>
          <h1 className="text-3xl leading-8 text-neutral-900">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="font-secondary text-sm leading-normal">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center gap-5 ">
            <p className="text-primary-400 text-3xl leading-normal">$149.99</p>
            <span className="line-through font-secondary text-sm">$169.99</span>
          </div>
          <button className="text-neutral-100 p-3 rounded-md font-secondary text-sm font-semibold bg-primary-400">
            Add to Cart
          </button>
        </div>
      </main>
    </Wrapper>
  )
}

export default App
