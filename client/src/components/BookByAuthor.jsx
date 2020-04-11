import React, { Component } from 'react';
import {useHistory} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import ReactDOM from 'react-dom';
import { Card, CardTitle, CardText, CardActions, Grid, Cell } from 'react-mdl';
// function BookByAuthor(props) {
    
//     const history = useHistory()

//     function showBookDetails(){
//         history.push({
//             pathname: '/bookdetails',
//             state: {book: props}
//         })
//     }

//     function sendToCart(id) {
//         const requestOptions = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json'},
//             body: JSON.stringify({book_id: id})
//         }
//         fetch('/user/addBook', requestOptions)
//         .then(res => {return res.json()})
//         .then(data => console.log(data))
//     }
//     const temp = <div>
//         <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src={props.thumbnail} />
//         <Card.Body>
//             <Card.Title><strong>Title: </strong>{props.title}</Card.Title>
//             <Card.Text><strong>by: </strong>{props.author}</Card.Text>
//             <Card.Text><strong>No. Pages: </strong>{props.pageCount}
//             </Card.Text>
//             <Card.Text>
//                 <strong>Short Description: </strong>{props.shortDescription}
//             </Card.Text>
//             <i class="fas fa-cart-plus" onClick={() => sendToCart(props.id)}></i>
//             <Button variant="primary" onClick={showBookDetails}>More details</Button>
//         </Card.Body>
//         </Card></div>;
//         ReactDOM.render(temp, document.getElementById('root'));
//         return (null)
// }
class BookByAuthor extends Component {
	constructor(props) {
		super();

		this.state = {
			items: []
        };
        //this.handleClick = this.handleClick.bind(this); 
    }
    componentDidMount() {
        this.getItems();   
	}
    getItems() {
		fetch(`/books/${this.props.location.aboutProps.book.author}`) 
            .then(results => {return results.json()})    
            .then(data => this.setState({ items: data }))
            .catch(e => console.log(e));
    }
    
    render () {
        console.log(this.props.location.aboutProps.book.author)
        console.log(this.state.items)
       
    return(<div>
            <Grid>
                {this.state.items.map((item, index) => {
                    return (
                            <div>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title><strong>Title: </strong>{item.title}</Card.Title>
            <Card.Text><strong>by: </strong>{item.author}</Card.Text>
            <Card.Text><strong>No. Pages: </strong>{item.pageCount}
            </Card.Text>
            <Card.Text>
                <strong>Short Description: </strong>{item.shortDescription}
            </Card.Text>
            {/* <i class="fas fa-cart-plus" onClick={() => sendToCart(item.id)}></i> */}
            {/* <Button variant="primary" onClick={showBookDetails}>More details</Button> */}
        </Card.Body>
        </Card></div>)
                })}
            </Grid>
        </div>)
   } 
}
    
export default BookByAuthor;
