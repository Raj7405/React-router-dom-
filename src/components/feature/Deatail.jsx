import { Suspense, useMemo, useState } from "react";
import { Outlet, useLoaderData, useOutletContext, useParams } from "react-router-dom";
import CardComponent from "../utilities/Card";
import Error403 from "../Error403";
import BigSpinner from "../utilities/BigSpinner";
function Details() { 
    const userData = useLoaderData()
    const data = useMemo(()=>{
      return userData
    }, [userData])
    console.log(userData)
    return ( 
      <div className="m-4"> 
      <Suspense fallback={<BigSpinner/>}>
        {!(userData.message) ? <CardComponent profileData={data}/> : <Error403/>}
      </Suspense> 
      </div> 
  );
}

export default Details