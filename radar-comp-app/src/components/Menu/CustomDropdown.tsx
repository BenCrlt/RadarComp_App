import '../../styles/Menu/CustomDropdown.css'
import {ListGroup} from 'react-bootstrap'
import {useState} from 'react'

interface PropsCustomDropdown {
    nameUser: string,
    onSignOut: () => void
}
 
function CustomDropdown({nameUser, onSignOut} : PropsCustomDropdown) {
    const [isDropdownActived, setIsDropdownActived] = useState(false);
    return (
        <div className='container-dropdown '>
            <div className='btn-dropdown' onClick={() => setIsDropdownActived(!isDropdownActived)}>  
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
            </div>
            <div>
                {isDropdownActived && (
                    <ListGroup className='list-dropdown'>
                        <ListGroup.Item disabled>Sign as <strong>{nameUser}</strong></ListGroup.Item>
                        <ListGroup.Item action>Profile</ListGroup.Item>
                        <ListGroup.Item action onClick={() => onSignOut()}>Sign out</ListGroup.Item>
                    </ListGroup>
                )}
            </div>
        </div>
    )
}

export default CustomDropdown;