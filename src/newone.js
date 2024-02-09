// import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MenuItem, TextField } from "@mui/material";
import MyApp from "./homenavbar";
import ButtonAppBar from "./appbar";

const year =[
  {
    label: '2022-23'
  },
  {
    label: '2023-24'
  }
]

const semester =[
  {
    label: 'Odd'
  },
  {
    label: 'Even'
  }
]

const Formpage=()=>{
    return(
        <>
        <div>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
  <div>
      <ButtonAppBar/>
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-6 offset-md-3 mt-5 ">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title" style={{color: 'rgb(116, 17, 146)'}}>STUDENT MOTIVATION FOR PAPER PRESENTATION, PROJECT SUBMISSION AND OTHER CONTEST</h5>
          </div>
          <div className="card-body">
            <form onsubmit="return validate()" name="sesta">
            <div>
            <TextField
                  id="academicYear"
                  select
                  label="Academic Year"
                  fullWidth
                >
                  {year.map((option) => (
                    <MenuItem key={option.label} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
             </TextField>
            </div>
            <div>
            <TextField
                  id="semester"
                  select
                  label="Semester"
                  fullWidth
                  className="mt-2"
                >
                  {semester.map((option) => (
                    <MenuItem key={option.label} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
             </TextField>
            </div>
              <div className="mt-2">
                <TextField id="faculty_name" placeholder="Enter Faculty Name" label="Faculty Name" fullWidth variant="outlined" />
              </div>

              <div className="mt-2">
                <TextField id="student_name" label="Student Name" placeholder="Enter Student Name" fullWidth variant="outlined" />
              </div>
              <div className="mt-2">
                <TextField id="contest" label="Contest" placeholder="contest" fullWidth variant="outlined" />
              </div>
              <div className="mt-2">
                <TextField id="paper_presentation" label="Paper Presentation" placeholder="Enter the Topic" fullWidth variant="outlined" />
              </div>
              <div className="mt-2">
                <TextField id="project_presentation" label="Project Presentation" placeholder="Enter the Topic" fullWidth variant="outlined" />
              </div>
              <div className="mt-2">
                <TextField id="other_contest" label="Other Contest" placeholder="Other contest" fullWidth variant="outlined" />
              </div>
              <div>

              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Date"/>
                  </DemoContainer>
                </LocalizationProvider>
              </div>

              </div>
              <div className="mt-2">

                <TextField id="no_of_beneficiaries" type="number" placeholder="No.of Beneficiaries"  label="No.of Beneficiaries" fullWidth variant="outlined" />
              </div>
              <div className="m-2 row justify-content-around">
                <button type="submit" className="btn btn-primary" value="sesta" onclick="return validate()">Submit</button>
                <button type="reset" className="btn btn-danger">Clear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div> 
  </div>
</div>

        </>
    )
}
export default Formpage;