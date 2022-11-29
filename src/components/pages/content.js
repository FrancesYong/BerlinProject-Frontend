import React from 'react'
import DataGalery from '../data/dataGambar.json';

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
        {/* <div className="container px-0 py-4">
            <div className="pp-category-filter">
            <div className="row">
                <div className="col-sm-12">
                <a className="btn btn-primary pp-filter-button" href="/#" data-filter="all">All</a>
                <a className="btn btn-outline-primary pp-filter-button" href="/#" data-filter="people">People</a>
                <a className="btn btn-outline-primary pp-filter-button" href="/#" data-filter="nature">Nature</a>
                <a className="btn btn-outline-primary pp-filter-button" href="/#" data-filter="computer">Computer</a>
                <a className="btn btn-outline-primary pp-filter-button" href="/#" data-filter="food">Food</a>
                </div>
            </div>
            </div>
        </div> */}
        <div className="container px-0">
            <div className="pp-gallery">
            <div className="card-columns">
                <div className="card" data-groups="[&quot;nature&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[0].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[0].judul}</div>
                        <p>{DataGalery[0].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;nature&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[1].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[1].judul}</div>
                        <p>{DataGalery[1].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;nature&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[2].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[2].judul}</div>
                        <p>{DataGalery[2].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;nature&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[3].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[3].judul}</div>
                        <p>{DataGalery[3].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;nature&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[4].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[4].judul}</div>
                        <p>{DataGalery[4].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;nature&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[5].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[5].judul}</div>
                        <p>{DataGalery[5].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;people&quot; , &quot;nature&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[6].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[6].judul}</div>
                        <p>{DataGalery[6].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;people&quot;]"><a href="image-detail.html">
                <figure className="pp-effect"><img className="img-fluid" src={DataGalery[7].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[7].judul}</div>
                        <p>{DataGalery[7].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;people&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[8].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[8].judul}</div>
                        <p>{DataGalery[8].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;people&quot;]"><a href="image-detail.html">
                <figure className="pp-effect"><img className="img-fluid" src={DataGalery[9].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[9].judul}</div>
                        <p>{DataGalery[9].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;people&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[10].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[10].judul}</div>
                        <p>{DataGalery[10].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;people&quot; , &quot;nature&quot;]"><a href="image-detail.html">
                <figure className="pp-effect"><img className="img-fluid" src={DataGalery[11].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[11].judul}</div>
                        <p>{DataGalery[11].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;computer&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[12].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[12].judul}</div>
                        <p>{DataGalery[12].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;computer&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[13].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[13].judul}</div>
                        <p>{DataGalery[13].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;computer&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[14].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[14].judul}</div>
                        <p>{DataGalery[14].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;computer&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[15].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[15].judul}</div>
                        <p>{DataGalery[15].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;computer&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[16].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[16].judul}</div>
                        <p>{DataGalery[16].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;food&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[17].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[17].judul}</div>
                        <p>{DataGalery[17].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;food&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[18].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[18].judul}</div>
                        <p>{DataGalery[18].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;food&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[19].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[19].judul}</div>
                        <p>{DataGalery[19].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;food&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[20].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[20].judul}</div>
                        <p>{DataGalery[20].kategori}</p>
                    </figcaption>
                    </figure></a></div>
                <div className="card" data-groups="[&quot;food&quot;]"><a href="image-detail.html">
                    <figure className="pp-effect"><img className="img-fluid" src={DataGalery[21].sumber} alt="Nature" />
                    <figcaption>
                        <div className="h4">{DataGalery[21].judul}</div>
                        <p>{DataGalery[21].kategori}</p>
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