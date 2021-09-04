import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import CategoryCard from '../components/CategoryCard'
import CusineCard from '../components/CusineCard'
import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'

import banner from '../assets/images/banner.png'

const Home = () => {
    const [cusineList,setCusineList]=useState();
    const getCusineList = async() => {
       let response = await axios.get('http://gridecoreapp-env.peird25tbn.us-east-1.elasticbeanstalk.com/business/cusine');
       return response;
    }
    useEffect(()=>{
        getCusineList().then(res => {
            console.log("I GOT MY CUSINE LIST FROM SERVER");
            console.log(res);
            if(res.data.count > 0){
                setCusineList(res.data.data);
            }
        }).catch(err => {
            console.log("I GOT ERROR FROM SERVER");
            console.log(err);
        }) ;
    },[]);
    
    return (
        <Helmet title="Sabai Aayo Gharmai">
            {/* hero slider */}
            <HeroSlider
                data={heroSliderData}
                control={true}
                auto={false}
                timeOut={5000}
            />
            {/* end hero slider */}

            {/* policy section */}
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item, index) => <Link key={index} to="/policy">
                                <PolicyCard
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>)
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end policy section */}

            {/* best selling section */}
            <Section>
                <SectionTitle>
                Browse a Popular Category
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            // productData.getProducts(4).map((item, index) => (
                            //     <CategoryCard
                            //         key={index}
                            //         img01={item.image01}
                            //         img02={item.image02}
                            //         name={item.title}
                            //         price={Number(item.price)}
                            //         slug={item.slug}
                            //     />
                            // ))
                        }

{
                            cusineList?.map((item, index) => (
                                <CusineCard
                                    key={index}
                                    img01={item.bannerImage}
                                    img02={item.iconImage}
                                    name={item.name}
                                    price={Number(0)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end best selling section */}

            {/* new arrival section */}
            <Section>
                <SectionTitle>
                    sản phẩm mới
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(8).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end new arrival section */}
            
            {/* banner */}
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>
            {/* end banner */}

            {/* popular product section */}
            <Section>
                <SectionTitle>
                    Click me
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(12).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end popular product section */}
        </Helmet>
    )
}

export default Home
