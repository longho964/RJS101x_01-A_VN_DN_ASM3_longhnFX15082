import React from "react";
import { useState } from "react";
import {Button, Form,FormGroup,Col,Label,Input} from "reactstrap"

function Search(props){
    const [search, setSearch] = useState("");

    const handleOnChange= (e)=>{
        console.log("e",e)
        setSearch(e.target.value)
    }

    const handleSearch = ()=> {
        props.filterStaff(search)
        
    }
    return(
          

        <div>
          <Form>
            <FormGroup row>
            <Label htmlFor="search" md={3}>
                <Button color="danger" onClick={handleSearch}>Search</Button>
              </Label>
              <Col md={7}>
                <Input onChange={handleOnChange} type="text" value={search} id="search" name="search" placeholder="Search..."/>
              </Col>
              
            </FormGroup>
          </Form>
        </div>
    )
}

export default Search;