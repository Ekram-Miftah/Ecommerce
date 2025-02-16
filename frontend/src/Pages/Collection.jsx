import { useContext,useEffect,useState } from "react"
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../Component/Title";
import Productitem from "../Component/Productitem";

const Collection = () => {
  const {products,search,showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]); 
  const [sortType,setSortType]=useState('relevant')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]); 
    }
    console.log("Selected Categories:", category); // Debugging
  };
  
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    console.log("Clicked:", value); // Check what value is coming
    
    if (subcategory.includes(e.target.value)) {
      
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]); 
    }
    
  };
  // debug...................................

  // debug....................................

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))

    }
  
    
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
  
    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subcategory.includes(item.subCategory)
      );
    }
  
    setFilterProducts(productsCopy);
  };
  
const sortProducts=()=>{

  let fpCopy=filterProducts.slice();
  switch(sortType){
    case 'low-high':setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
    break;

    case 'high-low':setFilterProducts(fpCopy.sort((a,b)=>( b.price-a.price )));
    break;
     default:
      applyFilter();
      break;
  }
}

  useEffect(()=>{
   applyFilter();
  },[category,subcategory,search,showSearch,products]);

  useEffect(()=>{
    sortProducts();

  },[sortType])


  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10  pt-10 border-t">
      {/*filter Options*/}
      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)}  className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS</p>
        <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90': ''}`} alt="" />
        {/*Catogory Filter*/}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'}  sm:block`}>
          <p className="mb-3 text-sm font-medium">CATAGORIES</p>
          <div className="flex flex-col gap-2  text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Twopiece'} onChange={toggleCategory}/> 
              Two Piece</p>

              <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Threepiece'} onChange={toggleCategory}/> 
              Three Piece</p>
              <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Doublebr'} onChange={toggleCategory}/> 
              Double Breasted</p>

          </div>

        </div>
        {/*Sub Catagorie Filter*/}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'}  sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE </p>
          <div className="flex flex-col gap-2  text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Tuxedo'} onChange={toggleSubCategory}/> 
              Tuxedo</p>

              <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Mixandmatch'} onChange={toggleSubCategory}/> 
            Mix and Match</p>
              <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Casual'} onChange={toggleSubCategory}/> 
              Casual</p>

          </div>

        </div>


      </div>

      {/*Right Side*/}
      <div className=" flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/*Product Sort*/}
          <select onChange={(e)=>setSortType(e.target.value)}name="" id="" className="border-2 border-gray-300 text-sm px-2 ">
            <option value="relevant">Sort By: Relevance</option>
            <option value="low-high">Sort By: Low-High</option>
            <option value="high-low">Sort By: High-Low</option>
          </select>

        </div>
        {/*Map Products*/}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.map((item,index)=>(
              <Productitem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))
          }

        </div>

      </div>
      
    </div>
  )
}

export default Collection
