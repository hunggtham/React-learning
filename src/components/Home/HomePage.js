
import videoHomePage from '../../assets/video-1920.mp4';
const HomePage = (props) => {
    return (
        <div>
            <video autoPlay loop muted
                src={videoHomePage} type="video/mp4" />
            <div className='homepage-content'>
                <div className='title'>There's a better way to ask</div>
                <div className='title-content'>You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy.</div>
                <div >
                    <button className='title-button'>Get started - it's free</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;