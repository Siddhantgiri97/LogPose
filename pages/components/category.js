import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React from "react";
import One from "../../public/one.jpg"
import Cherry from "../../public/image-graphic-design.jpg"
import Orange from "../../public/image-photography.jpg"

const Category = () => {
    return (
        <>
            {/* About Section */}
            <section className={styles.about} id="about">
                <div className={`${styles.aboutImageBox} ${styles.gridPosLg}`}>
                    <picture>
                        <source
                            media="(max-width:768px)"
                            srcSet={One}
                        />
                        <source
                            media="(min-width:769px)"
                            srcSet={One}
                        />
                        <Image
                            src={One}
                            alt="about-img"
                            className={styles.aboutImg}
                            loading="lazy"
                            width={500}
                            height={500}
                        />
                    </picture>
                </div>

                <div className={styles.aboutContent}>
                    <h2 className={styles.aboutH2}>Transform your brand</h2>
                    <p className={styles.aboutP}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias officiis neque excepturi nihil eum non eaque
                        illo magni a. Eaque accusantium veniam exercitationem. Et odit ullam, doloremque odio laboriosam quas veniam
                        nemo vel voluptatibus?
                    </p>
                    <a href="#" className={`${styles.aboutLink} ${styles.yellow}`}>
                        Learn more
                    </a>
                </div>


                <div className={styles.aboutContent}>
                    <h2 className={styles.aboutH2}>Stand out to right audience</h2>
                    <p className={styles.aboutP}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias officiis neque excepturi nihil eum non eaque
                        illo magni a. Eaque accusantium veniam exercitationem. Et odit ullam, doloremque odio laboriosam quas veniam
                        nemo vel voluptatibus?
                    </p>
                    <a href="#" className={`${styles.aboutLink} ${styles.pink}`}>
                        Learn more
                    </a>
                </div>

                <div className={styles.aboutImageBox}>
                    <picture>
                        <source
                            media="(max-width:768px)"
                            srcSet={One}
                        />
                        <source
                            media="(min-width:769px)"
                            srcSet={One}
                        />
                        <Image
                            src={One}
                            alt="about-img"
                            className={styles.aboutImg}
                            loading="lazy"
                            width={500}
                            height={500}
                        />
                    </picture>
                </div>
            </section>

            {/* Services Section */}
            <section className={styles.services} id="services">
                <div className={styles.serviceBox}>
                    <div className={styles.imgBox}>
                        <picture>
                            <source
                                media="(max-width:768px)"
                                srcSet={One}
                            />
                            <source
                                media="(min-width:769px)"
                                srcSet={One}
                            />
                            <Image
                                src={Cherry}
                                alt="service image"
                                className={styles.serviceImg}
                                loading="lazy"
                                width={500}
                                height={500}
                            />
                        </picture>
                    </div>
                    <div className={styles.serviceAbsoluteContent}>
                        <h3 className={`${styles.serviceH3} ${styles.cyan}`}>Graphic design</h3>
                        <p className={`${styles.serviceP} ${styles.cyan}`}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita omnis dolorem unde? Delectus et illo
                            quidem dignissimos recusandae atque voluptate in commodi excepturi reprehender
                        </p>
                    </div>
                </div>

                <div className={styles.serviceBox}>
                    <div className={styles.imgBox}>
                        <picture>
                            <source
                                media="(max-width:768px)"
                                srcSet={One}
                            />
                            <source
                                media="(min-width:769px)"
                                srcSet={One}
                            />
                            <Image
                                src={Orange}
                                alt="photography image"
                                className={styles.serviceImg}
                                loading="lazy"
                                width={500}
                                height={500}
                            />
                        </picture>
                    </div>
                    <div className={styles.serviceAbsoluteContent}>
                        <h3 className={`${styles.serviceH3} ${styles.blue}`}>Photography</h3>
                        <p className={`${styles.serviceP} ${styles.blue}`}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita omnis dolorem unde? Delectus et illo
                            quidem dignissimos recusandae atque voluptate in commodi excepturi reprehender
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Category;
