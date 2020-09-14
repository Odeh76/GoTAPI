import React from 'react'
import Spinner from '../userinterface/Spinner';
import CharItem from '../characters/CharItem';
const CharGrid = ({items, isLoading}) => {
    return isLoading ? (<Spinner />) : (<section className="cards">
        {items.map(item => (
            <CharItem item={item}></CharItem>
        ))}
    </section>)
}

export default CharGrid


// import React from 'react'
// import styled from 'styled-components'
// const CharGrid = ({items, isLoading}) => {
//     return (
//         <CardStyleComponent>
//         <section className="cards">
//            <ul>
//                <li>test</li>
//                <li>test</li>
//                <li>test</li>
//                <li>test</li>
//            </ul>
//         </section>
//         </CardStyleComponent>
//     )
// }

// export default CharGrid

// // export const CardStyleComponent = styled.section`

// //     .cards {
// //     margin: auto;
// //     width: 100%;
// //     height: 100vh;
// //     border: 3px solid lightgray;
// //     border-radius: 15px;
// //     font-size: 5em;
// //     }

// //     ul {
// //         display: grid;
// //         grid-template-columns: repeat (4, 1fr);
// //         list-style: none;
// //     }

// //     ul li {
// //         margin: auto;
// //     }


    
// // `;


