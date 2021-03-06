import React from 'react';

function Footer() {
    return(
        <footer>
            <div class="container-fluid padding">
                <div class="row text-center">
                    <div class="col-md-3">
                        <hr class="light"></hr>
                        <h5>Developer</h5>
                        <hr class="light"></hr>
                        <a href="/AboutMe"><p>Codie Cottrell</p></a>
                    </div>
                    <div class="col-md-6">
                        <hr class="light"></hr>
                        <h5>Email</h5>
                        <hr class="light"></hr>
                        <a href="mailto:codiecottrell@gmail.com"><p>codiecottrell@gmail.com</p></a>
                    </div>
                    <div class="col-md-3">
                        <hr class="light"></hr>
                        <h5>Mobile</h5>
                        <hr class="light"></hr>
                        <p>(207) 745 4193</p>
                    </div>
                    <div><a href='https://pngtree.com/so/curve'>curve png from pngtree.com</a></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;