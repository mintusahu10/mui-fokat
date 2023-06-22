import  {Box, Dialog,Grid,Input,InputLabel,styled}  from '@mui/material';
import signup from "./Assets/Images/signup.webp";
const Container = styled(Box)`
background-color: #c1d7d7;
height: 100vh;
`;
const DialogStyle= {
  width:'50%',height:'100%',maxWidth:'100%',borderRadius:'1%'
  
};
 
const Image= styled('img')({
  height: "100%",
  width: "100%",
   
});
const InputField = styled(Box)`
margin-bottom:10px;
width:100%;

`;
const Inputstyled = styled(Input)`
font-size:14px
`;

const IconTypoStyled = styled(Box)`
padding: 0 0 10px 50px;
margin:0 0 10px 40px;
display:flex;
 
 
`;
function App() {
  return (
   <Container >
     <Dialog open={true}
      PaperProps={{sx:DialogStyle}}
      hideBackdrop={true}> 
      <Grid container  spacing={2} >
      <Grid item lg={6} md={12} sm={12} xs={12}>
<Image src={signup} alt='login'/>
      </Grid>
      <Grid item lg={6} md={12} sm={12} xs={12}>
      <InputField>
<InputLabel> Name
</InputLabel>
<Inputstyled/></InputField>
<InputField>
<InputLabel> Name
</InputLabel>
<Inputstyled/></InputField>


      </Grid>
      </Grid>
      </Dialog>
   </Container> 
  );
}

export default App;
