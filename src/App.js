

import { Card, CardImg } from 'react-bootstrap';

const Data = [{id: 1, title: 'Meta fron-end developer', image: 'https://i.ibb.co/4YMZFVj/meta.jpg'},
 {id: 2, title: 'Basics of web development & coding', image: 'https://i.ibb.co/VCpcP6W/michigan-certificate.jpg'},
  {id: 3, title: 'HTML & CSS in depth', image: 'https://i.ibb.co/6ghCVG3/css-depth.jpg'},
   {id: 4, title: 'Principles of UI/UX design', image: 'https://i.ibb.co/bdnTJGM/ux-desing.jpg'},
   {id: 5, title: 'React Basics', image: 'https://i.ibb.co/94HqxXh/React-basics.jpg'},
   {id: 6, title: 'Advanced React', image: 'https://i.ibb.co/tLm1P2F/advanced-react.jpg'},
   {id: 7, title: 'Version control', image: 'https://i.ibb.co/3fKbdwD/version-control.jpg'},
   {id: 8, title: 'Programming with javascript', image: 'https://i.ibb.co/ynxYdV5/javascript.jpg'},
   {id: 9, title: 'HTML5', image: 'https://i.ibb.co/1RDnT42/m-html.jpg'},
   {id: 10, title: 'CSS3', image: 'https://i.ibb.co/t4SrHt5/m-css.jpg'},
   {id: 11, title: 'Advanced styling with responsive designs', image: 'https://i.ibb.co/jgWVD6S/m-advanced-styling.jpg'},
   {id: 12, title: 'Interactivity with javascript', image: 'https://i.ibb.co/QDNJpZX/m-javascript.jpg'},
   {id: 13, title: '', image: 'https://i.ibb.co/WzdSgSN/Capture2.png'},
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
