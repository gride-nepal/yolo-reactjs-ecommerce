import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import Button from './Button'

import numberWithCommas from '../utils/numberWithCommas'

const CategoryCard = props => {
    return (
        <div className="category-card">
            <Link to={`/catalog/${props.slug}`}>
                <div className="category-card__image">
                    <img src={props.img01} alt="" />
                </div>
                <h3 className="category-card__name">{props.name}</h3>
            </Link>
         
        </div>
    )
}

CategoryCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default CategoryCard
