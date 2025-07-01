import React from 'react';
import './CategoriesContainer.css';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
const latestimages = [
    { image: "https://themewagon.github.io/gymlife/img/letest-blog/latest-2.jpg" },
    { image: "https://themewagon.github.io/gymlife/img/letest-blog/latest-3.jpg" },
    { image: "https://themewagon.github.io/gymlife/img/letest-blog/latest-4.jpg" },
    { image: "https://themewagon.github.io/gymlife/img/letest-blog/latest-2.jpg" },
    { image: "https://themewagon.github.io/gymlife/img/letest-blog/latest-3.jpg" },
    { image: "https://themewagon.github.io/gymlife/img/letest-blog/latest-4.jpg" }
    
    ]


export const CategoriesContainer = () => {
    return (
        <div>
            <div className="class-container">
                <div className="class-image-section">
                    <img src="https://themewagon.github.io/gymlife/img/classes/class-details/class-detailsl.jpg" alt="Category" className="class-image" />
                </div>
                <div className="class-details-section">
                    <h2>CATEGORIES</h2>
                    <div className="class-category">
                        <span className="class-category-name">Yoga</span>
                        <span className="class-category-number">12</span>
                    </div>
                    <div className="class-category">
                        <span className="class-category-name">Running</span>
                        <span className="class-category-number">32</span>
                    </div>
                    <div className="class-category">
                        <span className="class-category-name">Weight Loss</span>
                        <span className="class-category-number">86</span>
                    </div>
                    <div className="class-category">
                        <span className="class-category-name">Cardio</span>
                        <span className="class-category-number">25</span>
                    </div>
                    <div className="class-category">
                        <span className="class-category-name">Body Building</span>
                        <span className="class-category-number">36</span>
                    </div>
                    <div className="class-category">
                        <span className="class-category-name">Nutrition</span>
                        <span className="class-category-number">15</span>
                    </div>
                </div>

            </div>
            <div className='classes-subcontainer'>
                <div className='classes-des-container'>
                    <div className='classes-sub-container'>
                        <h2>BODY BUIDING</h2>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accusantium doloremque laudantium. Excepteur sint occaecat cupidatat non proident sculpa.</span>
                    </div>
                    <div>
                        <h2>TRAINER</h2>
                        <span>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur officia deserunt mollit.</span>
                    </div>
                    <div className="profile-container">
                        <div className="classes-profile-content">
                            <div className="classes-profile-left">
                                <img src="https://themewagon.github.io/gymlife/img/classes/class-details/trainer-profile.jpg" alt="Athart Rachel" className="classes-profile-image" />
                            </div>
                            <div className="classes-profile-right">
                                <div className='classes-name-conatiner'><h2>Athart Rachel</h2>
                                    <div><p className="classes-role">GYM TRAINER</p>
                                        <div className="classes-social-media">
                                            <FaFacebook className="classes-icon" />
                                            <FaTwitter className="classes-icon" />
                                            <FaYoutube className="classes-icon" />
                                            <FaInstagram className="classes-icon" />
                                        </div></div>
                                </div>
                                <p className="classes-about">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra maecenas lacus vel facilisis.
                                </p>
                                <div className="classes-trainer-info">
                                    <p><strong>Age:</strong> 35</p>
                                    <p><strong>Weight:</strong> 148lbs</p>
                                    <p><strong>Height:</strong> 5' 2''</p>
                                    <p><strong>Occupation:</strong> co-founder</p>
                                </div>
                                <p className="classes-about">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra maecenas lacus vel facilisis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h5>LATEST POSTS</h5>
                    </div>
                    {latestimages?.map((i) => (
                        <div className='classes-latestpost-container'>
                            <div className='classes-latest-post'>
                                <img style={{ width: "100%" }} src={i.image} alt='' />
                            </div>
                            <div className='classes-post-matter'>
                        <h6>Grilled Potato and Green Bean Salad</h6>
                        <span>Aug 15, 2019</span>
                    </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

