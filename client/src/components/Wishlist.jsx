import React, {useState} from 'react'
import {Table} from 'react-bootstrap'

function Wishlist() {

    const [user, setUser] = useState()
    const [currentTab, setCurrentTab] = useState(1)
    const [books, setBookList] = useState({})

    useEffect(() => {
        fetch('/user/wishlist')
        .then(res => {return res.json()})
        .then(data => setBookList(data))
    }, [])
    
    return(
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            Title
                        </th>
                        <th>
                            Author
                        </th>
                        <th>
                            Cover
                        </th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </Table>
        </div>
    )
}

export default Wishlist;