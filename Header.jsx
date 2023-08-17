

import { AppBar, Toolbar,styled} from '@mui/material'
import { Link} from 'react-router-dom';
import { routhPath } from '../routes/routes';

const StyledAppBar = styled(AppBar)({
    background: '#2d2d2d',
    height: 70,
    '& > div >  *': {
        textdecoration: 'none',
        color: 'inherit',
        marginRight:  20,
        fontSize: 14
    }
})




const Header =  () => {
    const logo ="https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";
    return (
        <StyledAppBar>
            <Toolbar>
                <Link to={routhPath.home}>
                <img src={logo} alt="logo" style={{width: 100,marginBottom:10}} />
                </Link>
                <Link>post a job</Link>
               <Link>find a job</Link>

            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;