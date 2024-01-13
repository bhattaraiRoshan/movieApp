import { Button, Col, Form, Row } from "react-bootstrap"
import { MovieCard } from "./MovieCard"
import { useEffect, useState } from "react"
import { fethMovie } from "../utility/fetchMovie"



export const SearchBar = () =>{

    const [initialName, setInitialName] = useState('')
    const [searchedMovie, setSerchedMovie] = useState({})

    useEffect(()=>{
   
        const fetchMovieLiset = async () =>{
          const movies = await fethMovie("Iron Man")
          setSerchedMovie(movies.data)
        }
    
        fetchMovieLiset()
    
      }, [])



    const handelOnSubmit = async (e) =>{
        e.preventDefault();
       const movie = await fethMovie(initialName)
       setSerchedMovie(movie)
    }

    return(
    <>
 
        <Form onSubmit={(e)=> handelOnSubmit(e)}>
        <Row>
            <Col>
                <Form.Control type="text" placeholder="First name" 
                onChange={(e)=> setInitialName(e.target.value)} />
            </Col>
            <Col>
          <Button type="submit">Search</Button>
            </Col>
        </Row>
        </Form>

       <div>
        <MovieCard searchedMovie={searchedMovie}/>
       </div>

       

    

 
    </>
   
    )
}