const About = ({ruteProfile, ruteProject}) => {
    return (
        <div>
            <h1 className="tc">Im the Fullstack developer</h1>
            <div className="tc">
                <button onClick={ruteProfile}>Profile</button> {'  '}
                <button onClick={ruteProject}>Project</button>
            </div>
            <hr/>
        </div>
    )
}

export default About;