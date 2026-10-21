import { render, Component } from 'preact'
import Router from 'preact-router'
import './scss/index.scss'

import Home from './components/Home'

const TOTAL_GRADIENTS = 13

// Record the exact moment the app mounts so we can synchronise animation phases.
const APP_START_TIME = performance.now()

// Returns a negative animation-delay that puts a freshly-created element in phase
// with the GradientAnimation that started at APP_START_TIME.
// e.g. if 3.4 s have elapsed, delay is "-3.4s" → browser treats the animation
// as already 3.4 s in, matching the parent perfectly.
function syncedDelay() {
    const elapsed = (performance.now() - APP_START_TIME) / 1000
    return `-${(elapsed % 10).toFixed(3)}s`
}

// Map every gradient class to its actual background-image value so we can
// apply it inline to the fade-in overlay layer.
const GRADIENT_MAP = {
    'gradient-1':  'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
    'gradient-2':  'linear-gradient(135deg, #06b6d4 0%, #0f172a 100%)',
    'gradient-3':  'linear-gradient(135deg, #38bdf8 0%, #0369a1 100%)',
    'gradient-4':  'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
    'gradient-5':  'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)',
    'gradient-6':  'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
    'gradient-7':  'linear-gradient(135deg, #fbbf24 0%, #ea580c 100%)',
    'gradient-8':  'linear-gradient(135deg, #10b981 0%, #0284c7 100%)',
    'gradient-9':  'linear-gradient(135deg, #059669 0%, #1e3a5f 100%)',
    'gradient-10': 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    'gradient-11': 'linear-gradient(135deg, #fb7185 0%, #f43f5e 100%)',
    'gradient-12': 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4f46e5 100%)',
    'gradient-13': 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0ea5e9 100%)',
}

function nextGradient(current) {
    const num = parseInt(current.replace('gradient-', ''), 10)
    const next = (num % TOTAL_GRADIENTS) + 1
    return `gradient-${next}`
}

class App extends Component {
    constructor(props) {
        super(props)
        const num = Math.floor(Math.random() * TOTAL_GRADIENTS) + 1
        this.state = {
            currentGradient: `gradient-${num}`,
            incomingGradient: null,
            // Captured once at mount so re-renders don't change the parent's delay.
            parentDelay: syncedDelay(),
            overlayDelay: null,
            transitioning: false,
        }
        this.handleRefresh = this.handleRefresh.bind(this)
    }

    handleRefresh() {
        if (this.state.transitioning) return

        const incoming = nextGradient(this.state.currentGradient)

        // Capture the phase at the exact moment the overlay is triggered,
        // so it starts in sync with the parent's running animation.
        this.setState({
            incomingGradient: incoming,
            overlayDelay: syncedDelay(),
            transitioning: true,
        })

        // After the CSS fade-in finishes, promote overlay → current and clean up.
        setTimeout(() => {
            this.setState({
                currentGradient: incoming,
                incomingGradient: null,
                overlayDelay: null,
                // Update parentDelay so it stays in phase for the next transition.
                parentDelay: syncedDelay(),
                transitioning: false,
            })
        }, 850)
    }

    render() {
        const { currentGradient, incomingGradient, overlayDelay, parentDelay, transitioning } = this.state

        return (
            <div
                className={`gradient-target ${currentGradient}`}
                style={{ animationDelay: parentDelay }}
            >
                {/* Overlay fades in on top; its GradientAnimation is phase-synced
                    with the parent so the background-position matches at all times. */}
                {incomingGradient && (
                    <div
                        className="gradient-layer gradient-layer--fade-in"
                        style={{
                            backgroundImage: GRADIENT_MAP[incomingGradient],
                            // First value → GradientAnimation delay (synced)
                            // Second value → gradientFadeIn delay (starts immediately)
                            animationDelay: `${overlayDelay}, 0s`,
                        }}
                    />
                )}
                <Router>
                    <Home path="/" onRefreshGradient={this.handleRefresh} refreshing={transitioning} />
                </Router>
            </div>
        )
    }
}

render(<App />, document.getElementById('app'))
