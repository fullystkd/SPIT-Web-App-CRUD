import React from 'react';
import pic1 from '../../images/pic1.jpg'
import pic2 from '../../images/pic2.jpg'
import logo from '../../images/logo.png'

function AboutUs(props) {
    return (
        <div class="container layout">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 col-6">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 mt-4 pt-2">
                                    <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                        <img src={pic1} style={{ width: '325px', height: '300px' }} class="img-fluid" alt="Image" />
                                        <div class="img-overlay bg-dark"></div>
                                    </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-12">
                                    <div class="mt-4 pt-2 text-right">
                                        <a href="javascript:void(0)" class="btn btn-info">Read More <i class="mdi mdi-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end row--> */}
                        </div>
                        {/* <!--end col--> */}

                        <div class="col-lg-6 col-md-6 col-6">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                        <img src={pic2} style={{ width: '325px', height: '300px' }} class="img-fluid" alt="Image" />
                                        <div class="img-overlay bg-dark"></div>
                                    </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-lg-12 col-md-12 mt-4 pt-2">
                                    <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                        <img src={logo} style={{ width: '325px', height: '300px' }} class="img-fluid" alt="Image" />
                                        <div class="img-overlay bg-dark"></div>
                                    </div>
                                </div>
                                {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}
                </div>
                {/* <!--end col--> */}

                <div class="col-lg-6 col-md-6 col-12 order-1 order-md-2 about-head">
                    <div class="section-title ml-lg-5">
                        <h1 class="text-custom font-weight-normal mb-3">About Us</h1>
                        <h4 class="title mb-4">
                            Our mission is to <br />
                            make your life easier.
                        </h4>
                        <p class="text-muted mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit quod debitis praesentium pariatur temporibus ipsa, cum quidem obcaecati sunt?</p>

                        <div class="row">
                            <div class="col-lg-6 mt-4 pt-2">
                                <div class="media align-items-center rounded shadow p-3">
                                    <i class="fa fa-play h4 mb-0 text-custom"></i>
                                    <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Responsive</a></h6>
                                </div>
                            </div>
                            <div class="col-lg-6 mt-4 pt-2">
                                <div class="media align-items-center rounded shadow p-3">
                                    <i class="fa fa-file-download h4 mb-0 text-custom"></i>
                                    <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Free Download</a></h6>
                                </div>
                            </div>
                            <div class="col-lg-6 mt-4 pt-2">
                                <div class="media align-items-center rounded shadow p-3">
                                    <i class="fa fa-user h4 mb-0 text-custom"></i>
                                    <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Support</a></h6>
                                </div>
                            </div>
                            <div class="col-lg-6 mt-4 pt-2">
                                <div class="media align-items-center rounded shadow p-3">
                                    <i class="fa fa-image h4 mb-0 text-custom"></i>
                                    <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Development</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--end col--> */}
            </div>
            {/* <!--enr row--> */}
        </div>
    );
}

export default AboutUs;