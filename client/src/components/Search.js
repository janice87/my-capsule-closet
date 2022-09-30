import { Box, Container, TextField} from '@mui/material';

const Search = ({searchTerm, onHandleSearchTerm}) => {
    
    const handleSearch = (e) => {
        onHandleSearchTerm(e.target.value)
    }
  
    return (
        <div>
        <Container maxWidth="sm">
            <Box       
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            >   
                  <TextField                 
                  variant="outlined"
                  size="small"
                  name="brand"                   
                  value={searchTerm}             
                  onChange={handleSearch} 
                  label="Search brand..."
                  style={{ marginBottom: "20px", marginTop: "5px", marginRight: "10px", marginLeft: "10px", width: "180px", height: 30 }}                     
                 />  
            </Box> 
        </Container>  
        </div>
    )
}

export default Search;