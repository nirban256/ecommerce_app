import Header from './components/Header'
import DistributedBanner from './components/DistributedBanner'
import ServiceStatus from './components/ServiceStatus'
import ProductList from './components/ProductList'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Header />

      <main className="flex-1">
        <DistributedBanner />
        <ServiceStatus />
        <ProductList />
      </main>

      <Footer />
    </div>
  );
};

export default App;