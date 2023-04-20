
import videoHomePage from '../../assets/video-1920.mp4';
const HomePage = (props) => {
    return (
        <div>
            <video autoPlay loop muted
                src={videoHomePage} type="video/mp4" />
        </div>
    )
}

export default HomePage;