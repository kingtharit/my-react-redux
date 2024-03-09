import { useParams } from 'react-router-dom'


const UserEdit = () => {
    const { id } = useParams ()
    return (
        <div>
            User Edit { id }
        </div>
    )
}

export default UserEdit