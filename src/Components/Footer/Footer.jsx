

const Footer = () => {
    return (
        <div className="bg-[#191919] text-white ">
           <div className="container mx-auto">
           <footer className="footer p-10 ">
            <aside className="space-y-3">
               <h2 className="text-3xl font-bold">CareerHub</h2>
                <p className="opacity-70">There are many variations of passages of Lorem Ipsum , <br /> but the majority have suffered alteration in some form.</p>
                <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725292204/social_y6vuyo.png" alt="" />
            </aside>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Work</a>
                <a className="link link-hover">Latest News</a>
                <a className="link link-hover">Careers</a>
            </nav>
            <nav>
                <h6 className="footer-title">Product</h6>
                <a className="link link-hover">Prototype</a>
                <a className="link link-hover">Plan & Pricing</a>
                <a className="link link-hover">Customers</a>
                <a className="link link-hover">Integration</a>
            </nav>
            <nav>
                <h6 className="footer-title">Support</h6>
                <a className="link link-hover">Help Desk</a>
                <a className="link link-hover">Sales</a>
                <a className="link link-hover">Become a Partner</a>
                <a className="link link-hover">Developers</a>
            </nav>
            <nav>
                <h6 className="footer-title">Contact</h6>
                <a className="link link-hover">524 Broadway , NYC</a>
                <a className="link link-hover">+1 777 - 978 - 5570</a>
            
            </nav>
        </footer>
           </div>
       

        <div className="container mx-auto">
             <hr />
           <div  className="flex justify-between   mt-3 py-5 ">
              <p>@2023 CareerHub. All Rights Reserved</p>
               <p>Powered By CareerHub</p>
           </div>

        </div>
        </div>
       
    );
};

export default Footer;