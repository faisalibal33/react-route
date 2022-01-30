const Project = ({ruteAbout, ruteProfile}) => {
    return (
        <div>
            <h1 className="tc"> My project</h1> 
            <div className="tc">
                <button onClick={ruteProfile}>Profile</button> {'  '}
                <button onClick={ruteAbout}>About</button>
            </div>
            <hr/>
        </div>
    )
}

export default Project;