import SectionTitle from "../../Component/Section/SectionTitle"
import FeaturedImg from '../../assets/home/featured.jpg'
import './Featured.css'

const FeaturedItems = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20" >
        <SectionTitle  subheading="Check it Out"  heading='Featured Item ' />
        <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center py-20 px-36">
            <div>
                <img src={FeaturedImg} alt="" />
            </div>
            <div className="md:ml-10">
                <p>march 20, 2024 </p>
                <p className="uppercase">Wher i can get some</p>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas cupiditate nesciunt vel veniam ea assumenda. Veritatis quaerat labore totam voluptatibus esse, suscipit eius asperiores repudiandae mollitia corrupti officia earum maxime quis quisquam ipsa dolorum voluptatem obcaecati aut ullam porro amet, vero dicta ea ratione. Corrupti nostrum esse tenetur sit ab.
                </p>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Read More</button>
            </div>
        </div>
    </div>
  )
}

export default FeaturedItems