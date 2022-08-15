import React from 'react';

import CheckCircle from '../../../../assets/img/Icons/check-blue-circle.svg';
import StarFade from '../../../../assets/img/Icons/star-fade.svg';
import StarGold from '../../../../assets/img/Icons/star-gold.svg';


function SatisfiedCustomers() {
    return (
        <div className="customer_satisfied">
            <div className="contaainer">
                <div className="row">
                    <div className="customer_review_satis">
                        <ul className="customer_review_grid">
                            <li className="gridReview_col">
                                <div className="gridReview_item">
                                    <h4 className='fw26'>Michelle Rivera</h4>
                                    <div className="verify"><img src={CheckCircle} /></div>
                                    <ul className="verifyRating">
                                        <li><img src={StarGold} /></li>
                                        <li><img src={StarGold} /></li>
                                        <li><img src={StarGold} /></li>
                                        <li><img src={StarFade} /></li>
                                        <li><img src={StarFade} /></li>
                                    </ul>
                                </div>
                            </li> {/* gridReview_col */}
                            <li className="gridReview_col">
                                <div className="gridReview_item">
                                    <h4 className='fw26'>Michelle Rivera</h4>
                                    <div className="verify"><img src={CheckCircle} /></div>
                                    <ul className="verifyRating">
                                        <li><img src={StarGold} /></li>
                                        <li><img src={StarGold} /></li>
                                        <li><img src={StarGold} /></li>
                                        <li><img src={StarFade} /></li>
                                        <li><img src={StarFade} /></li>
                                    </ul>
                                </div>
                            </li> {/* gridReview_col */}
                            <li className="gridReview_col">
                                <div className="gridReview_item">
                                    <h4 className='fw26'>Michelle Rivera</h4>
                                    <div className="verify"><img src={CheckCircle} /></div>
                                    <ul className="verifyRating">
                                        <li><img src={StarGold} /></li>
                                        <li><img src={StarGold} /></li>
                                        <li><img src={StarGold} /></li>
                                        <li><img src={StarFade} /></li>
                                        <li><img src={StarFade} /></li>
                                    </ul>
                                </div>
                            </li> {/* gridReview_col */}
                            <li className="gridReview_col">
                                <div className="gridReview_item">
                                    <h4 className='fw26'>Michelle Rivera</h4>
                                    <div className="verify"><img src={CheckCircle} /></div>
                                    <ul className="verifyRating">
                                        <li><img src={StarGold} /></li>
                                        <li><img src={StarGold} /></li>
                                        <li><img src={StarGold} /></li>
                                        <li><img src={StarFade} /></li>
                                        <li><img src={StarFade} /></li>
                                    </ul>
                                </div>
                            </li> {/* gridReview_col */}
                        </ul>
                    </div>
                    <div className="customer_review_content">
                        <h2 className="fz64">Satisfied Customers</h2>
                        <p>Android spy is an advanced app that you can install on the target
                            phone to bring insights to parents about target phones and build a
                            healthy and safe digital environment for kids with an advanced
                            set of spying and monitoring tools. Users can protect their kids from
                            online predators and inappropriate activities, like online dating,
                            pornography, and sexting.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SatisfiedCustomers;