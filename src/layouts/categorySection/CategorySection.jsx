
import tablelamp1 from '../../assets/tablelamp/tablelamp1.jpg'

const CategorySection = () => {
    return (
        <div className="my-14 mx-5">
            <h2 className="text-center text-2xl text-black font-bold mb-10">Top Category</h2>
            <div className="md:grid md:grid-cols-4 gap-4">
                <div className="card mb-5">
                    <figure><img src={ tablelamp1} alt="table lamp" /></figure>
                        <h2 className="m-4 text-black font-bold text-center">table Lamp (10)</h2>
                </div>
                <div className="card">
                    <figure><img src={ tablelamp1} alt="table lamp" /></figure>
                        <h2 className="m-4 text-black font-bold text-center">table Lamp (10)</h2>
                </div>
                <div className="card">
                    <figure><img src={ tablelamp1} alt="table lamp" /></figure>
                        <h2 className="m-4 text-black font-bold text-center">table Lamp (10)</h2>
                </div>
                <div className="card">
                    <figure><img src={ tablelamp1} alt="table lamp" /></figure>
                        <h2 className="m-4 text-black font-bold text-center">table Lamp (10)</h2>
                </div>
                <div className="card">
                    <figure><img src={ tablelamp1} alt="table lamp" /></figure>
                        <h2 className="m-4 text-black font-bold text-center">table Lamp (10)</h2>
                </div>
                <div className="card">
                    <figure><img src={ tablelamp1} alt="table lamp" /></figure>
                        <h2 className="m-4 text-black font-bold text-center">table Lamp (10)</h2>
                </div>
                <div className="card">
                    <figure><img src={ tablelamp1} alt="table lamp" /></figure>
                        <h2 className="m-4 text-black font-bold text-center">table Lamp (10)</h2>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;