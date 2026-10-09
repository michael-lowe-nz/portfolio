import Text from './Text'

const Home = ({ onRefreshGradient, refreshing }) => (
    <div className="home">
        <Text onRefreshGradient={onRefreshGradient} refreshing={refreshing} />
    </div>
)

export default Home
