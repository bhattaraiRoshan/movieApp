import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { fethMovie } from "../utility/fetchMovie"

export const MovieCard = ({searchedMovie}) =>{


  

  

 

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={searchedMovie?.Poster} />
        <Card.Body>
          <Card.Title>{}</Card.Title>
         
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}