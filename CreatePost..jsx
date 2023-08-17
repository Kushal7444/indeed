import { useState } from "react";
import Header from "../components/Header";
import { Box,  Typography, styled, TextField,  Button} from "@mui/material";
import Dropdown from "../components/Dropdown";

const Component = styled(Box)({
    padding: '80px 200px',
    background: '#F5F5F5'

})
const Container = styled(Box)({
    display: 'flex',
    background: '#FFFFFF',
    borderRadius: 20,
    justifyContent:'space-between',
    alignItems: 'center',
    padding: '0 70px',
    '& >  p' : {
        fontSize: 35,
        fontWeight: 700,
        opacity: '.7'

    }
})
const FormWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    padding: 20,
    background: '#FFFFFF',
    borderRadius: 20,
    '& > * ':{
        marginTop: '20px !important'
    }
})
const defaultObj = {
    profile: "",
    type: "",
    description:"",
    experience: "",
    technology: [],
    salary: ""
}

const options={
   type: ['Online', 'Offline'],
    experience: ['0-2 Years', '3-5 Years', '5 Years or more'],
    technology: ['Java', 'JavaScript', 'React', 'Angular', 'Node.js', 'Docker', 'AWS', 'HTML', 'CSS'],
    salary: ['Rs 0-300000', 'Rs 300000-500000', 'Rs 500000-800000', 'Rs 800000-1000000', 'Rs 1000000-1500000', 'Rs 1500000-2000000', 'Rs 2000000 or more']
}

const CreatePost = () => {
    const [data, setData] =useState(defaultObj);

    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});

    }



    return (
        <>
            <Header />
            <Component>
                <Container>
                    <Typography>Create a job post</Typography>
                    <img src={image} alt="create" />
                </Container>
                <FormWrapper>
                    <TextField 
                       placeholder="Job Title"
                       name="profile"
                       onChange={handleChange}
                    />
                    <Dropdown />
                    <TextField 
                            placeholder = "Job Description"
                            name="description"
                            onChange={ handleChange}
                        />
                    <Dropdown 
                     label="Job Type"
                     id="job.type.label"
                     value={data.type}
                     handleChange={handleChange}
                     name="type"
                     options= {options.type}
                     /> 
                    <Dropdown />
                     label="experience"
                     id="job.Experience.label"
                     value={data.experience}
                     handleChange={handleChange}
                     options={options.experience}
                       name="Experience"
                    
                    <Dropdown
                     label="techonolgy"
                     id="job.techology.label"
                     value={data.technology}
                     handleChange={handleChange}
                     options={options.technology}
                       name= "techonolgy"
                    />
                    <Dropdown 
                     label="salary"
                     id="job.salary.label"
                     value={data.salary}
                     handleChange={handleChange}
                     options={options.salary}
                        name= "salary"                    
                    />
                    <Button variant="contained">Save Job</Button>
                </FormWrapper>
            </Component>


       </>
    )}
    
export default CreatePost