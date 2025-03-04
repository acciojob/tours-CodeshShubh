import React, { useState } from 'react';
import styled from 'styled-components';

const Tour = ({id, name, info , image, price, removeItems}) => {
    const [Show, setShow] = useState(false)
  return (
    <Container>
        <h1>{name}</h1>
        <div className='image_Container'>
            <img src={image} alt='image'/>
        </div>
        <div>
            <p>{Show ? info : info.substring(0,200)}</p>
            <button onClick={()=>setShow(!Show)}>{Show ? ' See less' : 'Show more'}</button>
        </div>
        <h3>{price}</h3>

        <button onClick={()=>removeItems(id)}>Remove</button>
    </Container>
  )
}

export default Tour;


const Container = styled.div`
width: 30vw;
.image_Container{
    width: 300px;
    height: 200px;
}

.image_Container img{
    width: 100%;
    height: 200px;
}

`



