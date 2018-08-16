import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SERVER_URL} from '../constants.js';

class Carlist extends Component {

  constructor(props) {
    super(props);
    this.state = { cars: []};
  }

  componentDidMount() {
    this.fetchCars();
  }

  // Fetch all cars
  fetchCars = () => {
    fetch(SERVER_URL + 'api/cars')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        cars: responseData._embedded.cars,
      });
    })
    .catch(err => console.error(err));
  }

  // Delete car
  onDelClick = (link) => {
    fetch(link, {method: 'DELETE'})
    .then(res => {
      toast.success("Car deleted", {
        position: toast.POSITION.BOTTOM_LEFT
      });
      this.fetchCars();
    })
    .catch(err => {
      toast.error("Error when deleting", {
        position: toast.POSITION.BOTTOM_LEFT
      });
      console.error(err)
    })
  }

  render() {
    const columns = [{
      Header: 'Brand',
      accessor: 'brand',
    }, {
      Header: 'Model',
      accessor: 'model', 
    }, {
      Header: 'Color',
      accessor: 'color',
    }, {
      Header: 'Year',
      accessor: 'year',
    }, {
      Header: 'Price $',
      accessor: 'price',
    }, {
      id: 'delbutton',
      sortable: false,
      filterable: false,
      width: 100,
      accessor: '_links.self.href',
      Cell: ({value}) => (<button 
        onClick={()=>{this.onDelClick(value)}}>Delete</button>)
    }]

    return (
      <div className="App">
        <ReactTable data={this.state.cars} 
          columns={columns} filterable={true}/>
        <ToastContainer autoClose={1500} />
      </div>
    );
  }
}

export default Carlist;