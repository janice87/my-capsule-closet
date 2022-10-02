import { Box, Container, TextField, MenuItem} from '@mui/material';

const Search = ({searchTerm, onHandleSearchTerm, filterBy, onHandleFilter}) => {

    const handleSearch = (e) => {
        onHandleSearchTerm(e.target.value)
    }

    const handleFilter = (e) => {
        onHandleFilter(e.target.value)
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

                <TextField
                    variant="outlined"
                    size="small"
                    name="category"            
                    value={filterBy}             
                    onChange={handleFilter}  
                    select
                    label="Filter by Category"
                    style={{ marginBottom: "20px", marginTop: "5px", marginRight: "10px", marginLeft: "10px", width: "180px", height: 30 }} 
                    >                  
                    <MenuItem value="All">ALL</MenuItem> 
                    <MenuItem value="Blouses & Tops">TOPS</MenuItem> 
                    <MenuItem value="Bottoms">BOTTOMS</MenuItem> 
                    <MenuItem value="Coats">COATS</MenuItem> 
                    <MenuItem value="Dresses">DRESSES</MenuItem> 
                    <MenuItem value="Handbags">HANDBAGS</MenuItem> 
                    <MenuItem value="Shoes">SHOES</MenuItem> 
                </TextField>
            </Box> 
        </Container>  
        </div>
    )
}


export default Search;