import React, { Component } from 'react'
import  Jumbotron from "../../components/Jumbotron"
import { Container } from "../../components/Grid"
import PropTypeSection from "../../components/PropTypeSection"
import CityTypeSection from "../../components/CityTypeSection"
import PropertyDirections from "../../components/PropertyDirections"
import Card from "../../components/Card"
import PropertySearchField from "../../components/PropertySearchField"
import PropertyCustomSearch from "../../components/PropertyCustomSearch"
import "./Properties.css";

class Properties extends Component {

    constructor(props) {
        super(props)
        this.state = {
            propType: true,
            displayDetails: false,
            cities: false,
            cards: false,
            queryString: ""
        }
    }



    renderTypes = () => {
        if( this.state.propType ) {
            return <PropTypeSection clickFunction={ this.handlePropType }/>
        }
        
        if( this.state.cities ) {
            return (
                <div>
                    <CityTypeSection clickFunction={ this.renderCities }/>
                    <PropertyCustomSearch/>
                    <PropertySearchField/>
                </div>)
        }

        if( this.state.cards) {
            return (<div>
                    <PropertyCustomSearch/>
                    <PropertySearchField/>
                </div>)
        }
    }

    renderCities = (e) => {
        let city = e.target.id
        let query = this.state.queryString
        query += city
        this.setState({ cities: false })
        this.setState({ cards: true })
        this.setState({ queryString: query })
    }


    handlePropType = (e) => {
        let type = e.target.id;
        this.setState({ queryString: type })
        this.setState({ propType: false })
        this.setState({ cities: true })
    }

    handleDetails = (e) => {
        e.preventDefault()


    }

    render() {
        return (
            <div>
                <Jumbotron header = "Properties"/>
                <Container>
                    <PropertyDirections/>
                    { this.renderTypes() }
                    <Card
                        src = "../public/img/house1.jpg"
                        title = "Pool & Spa"
                        price = "689,000" 
                        address = "8950 Highland Crest Dallas, TX 75208"
                        sqrft = "3,100"
                        bedrooms = "4"
                        baths = "2.5"
                    />
                </Container>
            </div>
        )
    }
}

export default Properties