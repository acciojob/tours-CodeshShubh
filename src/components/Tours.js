import React from 'react'
import Tour from './Tour';
import styled from 'styled-components';

const Tours = ({tours, removeItems}) => {
  return (
    <Container>
        {
            tours.map((items, index)=>{
                return <Tour key={index} {...items} removeItems={removeItems}/>
            })
        }
    </Container>
  )
}

export default Tours;


const Container = styled.div`
display:flex;
flex-wrap: wrap;
`