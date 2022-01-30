const Profile = ({ruteAbout, ruteProject}) => {
    return (
        <div>
            <h1 className="tc"> My Name Faisal Iqbal </h1> 
            <div className="tc">
                <button onClick={ruteProject}>Project</button> {'  '}
                <button onClick={ruteAbout}>About</button>
            </div>
            <hr/>
        </div>
    )
}

export default Profile;