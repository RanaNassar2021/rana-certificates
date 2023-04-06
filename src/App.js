

import { Card, CardImg } from 'react-bootstrap';

const Data = [{id: 1, title: 'ride the waves.', image: 'https://i.ibb.co/4YMZFVj/meta.jpg'},
 {id: 2, title: 'tread the unknown.', image: 'https://i.ibb.co/VCpcP6W/michigan-certificate.jpg'},
  {id: 3, title: 'climb the highest.', image: 'https://i.ibb.co/6ghCVG3/css-depth.jpg'},
   {id: 4, title: 'escape.', image: 'https://i.ibb.co/bdnTJGM/ux-desing.jpg'},
   {id: 5, title: 'escape.', image: 'https://i.ibb.co/94HqxXh/React-basics.jpg'},
   {id: 6, title: 'escape.', image: 'https://i.ibb.co/tLm1P2F/advanced-react.jpg'},
   {id: 7, title: 'escape.', image: 'https://i.ibb.co/3fKbdwD/version-control.jpg'},
   {id: 8, title: 'escape.', image: 'https://i.ibb.co/ynxYdV5/javascript.jpg'},
   {id: 9, title: 'escape.', image: 'https://i.ibb.co/1RDnT42/m-html.jpg'},
   {id: 10, title: 'escape.', image: 'https://i.ibb.co/t4SrHt5/m-css.jpg'},
   {id: 11, title: 'escape.', image: 'https://i.ibb.co/jgWVD6S/m-advanced-styling.jpg'},
   {id: 12, title: 'escape.', image: 'https://i.ibb.co/QDNJpZX/m-javascript.jpg'},
   {id: 13, title: 'escape.', image: 'https://i.ibb.co/WzdSgSN/Capture2.png'},
  ]


function App() {
  const certificate = Data.map((data) =>{
    return(
      <div key={data.id} className='col-12 col-md-5 m-1'>
       <Card key={data.id}>
       <CardImg variant="top" src={data.image}/>
       <Card.Body>
        <Card.Title>{data.title}</Card.Title>
       </Card.Body>
      </Card>
      </div>
     
    )
  })

    return(
   <>
   <div className='row align-item-center justify-content-center bg-dark text-light fs-3 p-2'>
        Rana's courses and certificates
   </div>
   
    <div className='row align-item-center justify-content-center bg-dark '>
      
     {certificate}
    </div>

  
   </>
    )

}


export default App;
