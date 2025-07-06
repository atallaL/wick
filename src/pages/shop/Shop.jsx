import './Shop.css'

import Breadcrumbs from '../../components/Breadcrumbs'

function Shop() {

    const stock = {

    }

    return(
        <div className="shopContainer">
            <div className="shopHeaderContainer">
                <Breadcrumbs />
                <div className="shopHeader">
                    <h1>Shop</h1>
                    <p>Scroll through our list of available products below. Use our filter system to narrow down your search.</p>
                </div>
            </div>
            <div className="shopSection">
                <div className="shopFaceted">
                    <div className="shopFacetedClear">

                    </div>
                    <div className="shopFacetedOptions">
                        <div className="shopFacetedSection">
                            <h2>promotion</h2>
                        </div>
                        <div className="shopFacetedSection">
                            <h2>product</h2>
                        </div>
                        <div className="shopFacetedSection">
                            <h2>fragrances</h2>
                        </div>
                        <div className="shopFacetedSection">
                            <h2>price</h2>
                        </div>
                    </div>
                </div>
                <div className="shopResultsContainer">
                    
                </div>

            </div>
        </div>
    )
}

export default Shop;