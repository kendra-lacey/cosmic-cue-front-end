import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
// import MyProfile from '../myProfile/myProfile'
import {Link} from 'react-router-dom'


const Profiles = (user) => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <h1>Welcome to Cosmic Cue</h1>
      <h4> This is a list of all the profiles.</h4>
      {profiles.length ?
        <>
          {profiles.map(profile =>
          <div key={profile._id}>

            <Link to={`/profiles/${profile._id}`} profile={profile} key={profile._id} user={user}>
            {profile.name}</Link>

          </div>
          )}
        </>
        :
        <>
        <p>No profiles yet</p>
        </>
      }
    </>
  )
}

export default Profiles