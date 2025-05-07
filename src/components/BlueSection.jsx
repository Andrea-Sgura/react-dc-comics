import React from 'react'

const BlueSection = () => {
    return (
        <div className="container">
            <div className="blue-section d-flex justify-between">
                <div className="cta">
                    <img className="png-image" src="src/assets/img/buy-comics-digital-comics.png" alt="DC Comics" />
                </div>
                <div className="cta">
                    <img className="png-image" src="src/assets/img/buy-comics-merchandise.png" alt="DC Comics" />
                </div>
                <div className="cta">
                    <img className="png-image" src="src/assets/img/buy-comics-subscriptions.png" alt="DC Comics" />
                </div>
                <div className="cta">
                    <img className="png-image" src="src/assets/img/buy-comics-shop-locator.png" alt="DC Comics" />
                </div>
                <div className="cta">
                    <img className="svg-image" src="src/assets/img/buy-dc-power-visa.svg" alt="DC Comics" />
                </div>
            </div>
        </div>
    )
}

export default BlueSection