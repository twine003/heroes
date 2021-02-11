import { CLink } from "@coreui/react";

const StorieLink = ({name, url}) =>{
    const id = url.split('/').slice(-1)[0];
    return (
        <li>
            <CLink to={ `/storie/${id}` } className="h4 text-warning text-decoration-none">{name}</CLink>
        </li>
    )
}

export default StorieLink;