// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Formpage from "./newone"
// import ButtonAppBar from "./appbar"


// export const FirstApp=()=>{
//     return(
//        <>
//        <BrowserRouter>
//             <Routes>
//                     <Route path="/" element={()=>{<ButtonAppBar/>}}/>
//                     <Route path="/student_motivation" Component={()=>{<Formpage/>}}/>
//             </Routes>
//        </BrowserRouter>
//        </>
//     )
// }



// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Formpage from "./newone"
// import ButtonAppBar from "./appbar"

// export const FirstApp=()=>{
//     return(
//        <>
//        <BrowserRouter>
//             <Routes>
//                     <Route path="/" element={<ButtonAppBar/>}/>
//                     <Route path="/student_motivation" element={<Formpage/>}/>
//             </Routes>
//        </BrowserRouter>
//        </>
//     )
// }






// <MenuItem onClick={handleClose}>Conference Publications and Presentations</MenuItem>
//                 <MenuItem onClick={handleClose}>Workshop,Seminar,FDPs,SDPs Participations</MenuItem>
//                 <MenuItem onClick={handleClose}>Tech Talks to be delivered Multidisciplinary Lecture</MenuItem>
//                 <MenuItem onClick={handleClose}>Faculty Guest Talk in other Institution</MenuItem>
//                 <MenuItem onClick={handleClose}>NPTEL Certification</MenuItem>
//                 <MenuItem onClick={handleClose}>Participations in Taste</MenuItem>
//                 <MenuItem onClick={handleClose}>e-Content,(Video Lecture)</MenuItem>
//                 <MenuItem onClick={handleClose}>Visit to Industries, Institutions</MenuItem>
//                 <MenuItem onClick={handleClose}>Seed Money Proposal for Research</MenuItem>
//                 <MenuItem onClick={handleClose}>Awards at National International Level</MenuItem>
//                 <MenuItem onClick={handleClose}>Proposals Submission for Grants</MenuItem>
//                 <MenuItem onClick={handleClose}>Books, Chapters Authorship</MenuItem>
//                 <MenuItem onClick={handleClose}>Consultancy and Corporate Training  done for Revenue Generation</MenuItem>
//                 <MenuItem onClick={handleClose}>Patent Filled,Published,Grants</MenuItem>
//                 <MenuItem onClick={handleClose}>Collaborative Activities with MoU Signed Industries Institution</MenuItem>
//                 <MenuItem onClick={handleClose}>Visit to Library</MenuItem>


import { BrowserRouter, Route, Routes } from "react-router-dom"
import Formpage from "./newone"
import ButtonAppBar from "./appbar"

export const FirstApp=()=>{
    return(
       <>
       <BrowserRouter>
            <Routes>
                    <Route path="/" element={<ButtonAppBar/>}/>
                    <Route path="/student_motivation" element={<Formpage/>}/>
            </Routes>
       </BrowserRouter>
       </>
    )
}
