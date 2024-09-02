

const CetegoryList = () => {
    return (
        <div className="py-12 container mx-auto">
            <div className="text-center space-y-2">
                  <h2 className="font-bold text-3xl">Job Category List</h2>
                  <p className="text-xl">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-1 gap-8  py-5 mt-5">
                <div className="bg-[#FAF8FF]  py-5 px-8 space-y-3 rounded-xl">
                    <div className="bg-[#EFECFF] w-max p-8 rounded-2xl">
                         <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725285720/creative_mi1r2r.png" alt="" />
                     </div>
                    <div>
                       <h2 className="text-xl font-bold">Creative Design</h2>
                        <p className="opacity-90">100+ Jobs Available</p>
                    </div>
                </div>

                <div className="bg-[#FAF8FF]  py-5 px-8 space-y-3 rounded-xl">
                    <div className="bg-[#EFECFF] w-max p-8 rounded-2xl">
                         <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725285279/accounts_fn2hpq.png" alt="" />
                     </div>
                    <div>
                       <h2 className="text-xl font-bold">Account & Finance</h2>
                        <p className="opacity-90">300 Jobs Available</p>
                    </div>
                </div>

                <div className="bg-[#FAF8FF]  py-5 px-8 space-y-3 rounded-xl">
                    <div className="bg-[#EFECFF] w-max p-8 rounded-2xl">
                         <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725285815/marketing_q35rdu.png" alt="" />
                     </div>
                    <div>
                       <h2 className="text-xl font-bold">Marketing & Sales</h2>
                        <p className="opacity-90">150 Jobs Available</p>
                    </div>
                </div>

                <div className="bg-[#FAF8FF]  py-5 px-8 space-y-3 rounded-xl">
                    <div className="bg-[#EFECFF] w-max p-8 rounded-2xl">
                         <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725285867/chip_f8etj4.png" alt="" />
                     </div>
                    <div>
                       <h2 className="text-xl font-bold">Engineering Job</h2>
                        <p className="opacity-90">224 Jobs Available</p>
                    </div>
                </div>
              
            </div>

          

        </div>
    );
};

export default CetegoryList;