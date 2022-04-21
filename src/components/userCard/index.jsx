import './index.css'

const UserCard = ({users}) => {
    const { name, username, email, address, phone, website, company } = users

    const handleCLick = (e) => {
        e.preventDefault()
        console.log(address.street)
    }

    const link = address.street.split(' ').join('')

    return (
        <div className='users'>
            <div>Name, email: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>Address: {`${address.city}, ${address.street}, ${address.suite}`}</div>
            <div>Phone: {phone}</div>
            <div>Website: {website}</div>
            <div>Company: {company.name}</div>
            <a
                onClick={handleCLick}
                href={`https://${link}.ru`}
            >
                Link here
            </a>
        </div>
    )
}

export default UserCard