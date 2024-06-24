/*import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
//import { useParams } from "react-router-dom";

//import React from "react";
const Dashboard = () => {
   const [email,setEmail]=useState('')


  //1.using state navigation useLocation
  const location = useLocation();
  useEffect(() => {
            setEmail(location.state?.email)
    }, [location.state])

  
   // 3) To get the data from path variavle or param we use useParams()
  //  const params = useParams();
  //   useEffect(() => {
  //          setEmail(params.email);
  //      },[]);

  return (
    <div className="dashboard">
      <h3>Dashboard</h3><br/>
      <p>Email:{email}</p>
    </div>
  );
}

export default Dashboard;*/



//2.To get the data from search param we use useSearchParams()   
import { useState,useEffect } from "react";

import { useSearchParams } from "react-router-dom";

const Dashboard = () => {
   const [email,setEmail]=useState('')

   // const [searchParams] = useSearchParams();
    const [searchParams] = useSearchParams();
    useEffect(() => {
        setEmail(searchParams.get("email"))
    }, [searchParams])

  return (
    <div className="dashboard">
      <h3>Dashboard</h3><br/>
      <p>Email:{email}</p>
    </div>
  );
}

export default Dashboard;




//3) To get the data from path variavle or param we use useParams() 
// import { useState,useEffect } from "react";
// import { useParams } from "react-router-dom";

// const Dashboard = () => {
//    const [email,setEmail]=useState('')

// const params = useParams();
// useEffect(() => {
//     setEmail(params.email);
// }, [params.email]);

//   return (
//     <div className="dashboard">
//       <h3>Dashboard</h3><br/>
//       <p>Email:{email}</p>
//     </div>
//   );
// }

// export default Dashboard;



