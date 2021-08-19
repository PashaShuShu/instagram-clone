import { NavLink } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <div>
                <div>
                    ava
                </div>
                <div>
                    nickname
                </div>
                <div>
                    edit profile
                </div>
                <div>
                    <spun>публикации 0</spun>
                    <spun>subscrubers 0</spun>
                    <spun>subscriptions 0</spun>
                </div>
                <div>
                    MY LINK
                </div>
                <div>
                    status
                </div>
            </div>

            <div>
                <div>
                    <NavLink to='/profile/publications'>
                        публикации
                    </NavLink>
                    <NavLink to='/profile/igtv'>
                        IGTV
                    </NavLink>
                    <NavLink to='/profile/saves'>
                        saves
                    </NavLink>
                    <NavLink to='/profile/markers'>
                        markers
                    </NavLink>
                </div>
                
                <div>
                    <Switch>
                        <Route exact path='/profile' render={() =>
                            true ?
                                <Redirect to="/profile/publications" />
                                :
                                <Redirect to="/login" />
                        }></Route>
                        <Route path='/profile/publications'>
                            публикации
                        </Route>
                        <Route path='/profile/igtv'>
                            IGTV
                        </Route>
                        <Route path='/profile/saves'>
                            saves
                        </Route>
                        <Route path='/profile/markers'>
                            markers
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Profile;