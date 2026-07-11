import Navbar from "../components/layout/Navbar";

function MainLayout({ children }) {

    return (

        <div className="min-h-screen bg-gray-100">

            <Navbar />

            <main className="max-w-7xl mx-auto px-8 py-12">

                {children}

            </main>

        </div>

    );

}

export default MainLayout;