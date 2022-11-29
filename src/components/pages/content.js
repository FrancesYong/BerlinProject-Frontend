import React from 'react'

function content() {
  return (
    <div className="page-content">
        <div className="container">
        <div className="container pp-section">
            <div className="row">
            <div className="col-md-9 col-sm-12 px-0">
                <h1 className="h3"> We are Photo Perfect, A Digital Photography Studio.</h1>
            </div>
            </div>
        </div>
        <div className="container px-0 py-4">
            <div className="pp-category-filter">
            <div className="row">
                <div className="col-sm-12">
                {/* <a className="btn btn-primary pp-filter-button" href="/#" data-filter="all">All</a>
                <a className="btn btn-outline-primary pp-filter-button" href="/#" data-filter="people">People</a>
                <a className="btn btn-outline-primary pp-filter-button" href="/#" data-filter="nature">Nature</a>
                <a className="btn btn-outline-primary pp-filter-button" href="/#" data-filter="computer">Computer</a>
                <a className="btn btn-outline-primary pp-filter-button" href="/#" data-filter="food">Food</a> */}
                </div>
            </div>
            </div>
        </div>
        <div className="container px-0">
            <div className="pp-gallery">
            <div className="card-columns">
                <div className="card" data-groups="[&quot;nature&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/1-nature.jpg" alt="Nature" />
                    <figcaption>
                        <div className="h4">Forest</div>
                        <p>Nature</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;nature&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/2-nature.jpg" alt="Nature" />
                    <figcaption>
                        <div className="h4">Bird</div>
                        <p>Nature</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;nature&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/4-nature.jpg" alt="Nature" />
                    <figcaption>
                        <div className="h4">Sunrise</div>
                        <p>Nature</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;nature&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/5-nature.jpg" alt="Nature" />
                    <figcaption>
                        <div className="h4">Greenery</div>
                        <p>Nature</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;nature&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/8-nature.jpg" alt="Nature" />
                    <figcaption>
                        <div className="h4">Bird</div>
                        <p>Nature</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;nature&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/9-nature.jpg" alt="Nature" />
                    <figcaption>
                        <div className="h4">Flower</div>
                        <p>Nature</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;people&quot; , &quot;nature&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/10-people.jpg" alt="People" />
                    <figcaption>
                        <div className="h4">Model</div>
                        <p>People</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;people&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/11-people.jpg" alt="People" />
                    <figcaption>
                        <div className="h4">Cute</div>
                        <p>People</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;people&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/13-people.jpg" alt="People" />
                    <figcaption>
                        <div className="h4">Model</div>
                        <p>People</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;people&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/14-people.jpg" alt="People" />
                    <figcaption>
                        <div className="h4">Model</div>
                        <p>People</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;people&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/16-people.jpg" alt="People" />
                    <figcaption>
                        <div className="h4">Model</div>
                        <p>People</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;people&quot; , &quot;nature&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/17-people.jpg" alt="People" />
                    <figcaption>
                        <div className="h4">Model</div>
                        <p>People</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;computer&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/18-computer.jpg" alt="Computer" />
                    <figcaption>
                        <div className="h4">Laptop</div>
                        <p>Computer</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;computer&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/19-computer.jpg" alt="Computer" />
                    <figcaption>
                        <div className="h4">Laptop</div>
                        <p>Computer</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;computer&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/20-computer.jpg" alt="Computer" />
                    <figcaption>
                        <div className="h4">Laptop</div>
                        <p>Computer</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;computer&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/23-computer.jpg" alt="Computer" />
                    <figcaption>
                        <div className="h4">Laptop</div>
                        <p>Computer</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;computer&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/24-computer.jpg" alt="Computer" />
                    <figcaption>
                        <div className="h4">Laptop</div>
                        <p>Computer</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;food&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/26-food.jpg" alt="Food" />
                    <figcaption>
                        <div className="h4">Fruit Salad</div>
                        <p>Food</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;food&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/27-food.jpg" alt="Food" />
                    <figcaption>
                        <div className="h4">Oranges</div>
                        <p>Food</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;food&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/28-food.jpg" alt="Food" />
                    <figcaption>
                        <div className="h4">Lemon Tea</div>
                        <p>Food</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;food&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/29-food.jpg" alt="Food" />
                    <figcaption>
                        <div className="h4">Pasta</div>
                        <p>Food</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;food&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src="images/30-food.jpg" alt="Food" />
                    <figcaption>
                        <div className="h4">Burger</div>
                        <p>Food</p>
                    </figcaption>
                    </figure></a></div>
            </div>
            </div>
        </div>
        <div className="pp-section" /></div>
    </div>
  )
}

export default content